import hashlib
import time
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password,check_password
from django.utils.timezone import now
import json
import firebase_admin
from firebase_admin import db
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
import datetime
from django.contrib.messages.storage.fallback import FallbackStorage
from django.core.mail import send_mail
import pathlib
import textwrap
from anyio import Path
from PIL import Image
import google.generativeai as genai
from IPython.display import display
from IPython.display import Markdown
from io import BytesIO

import requests

GOOGLE_API_KEY='AIzaSyCfQn34cjYViGCN_uKa1y3u7HbIXbyEpp8'

genai.configure(api_key=GOOGLE_API_KEY)
@csrf_exempt
def signup(request):
    if request.method != "POST":
        return JsonResponse({'error': 'Method not allowed','status':405})

    try:
        data = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON','status':400})

    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    gender = data.get('sex')
    imageurl = data.get('image')


    hashed_password = make_password(password)

    user_data = {
        'name': name,
        'email': email,
        'password': hashed_password,
        'gender': gender,
        'imageurl': imageurl,
        'account_created': now().strftime("%Y-%m-%d %H:%M:%S"),
        'last_login': now().strftime("%Y-%m-%d %H:%M:%S"),
    }

    ref = db.reference('users')
    users_ref = ref.child(email.replace('.', ','))
    
    if users_ref.get():
        return JsonResponse({'error': 'A user with this email ID already exists.','status':409}, status=409)

    users_ref.set(user_data)
    
    user_object = {
        'name': name,
        'email': email,
        'img': imageurl,
    }

    return JsonResponse({'success': 'Successfully registered. Please log in.', 'data': user_object,'status':200}, status=200)

@csrf_exempt
def signin(request):
    if request.method != "POST":
        return JsonResponse({'error': 'Only POST method is allowed','status':405}, status=405)
    
    data = json.loads(request.body)
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return JsonResponse({'error': 'Email and password are required','status':400})

    try:
        firebase_email_key = email.replace('.', ',')
        user_ref = db.reference('users').child(firebase_email_key)
                    
        user_data = user_ref.get()

        if not user_data:
            return JsonResponse({'error': 'User does not exist','status':404},status=404)

        if not check_password(password, user_data.get('password')):
            return JsonResponse({'error': 'Incorrect password','status':401},status=401)

        user_ref.update({
            'last_login': now().strftime("%Y-%m-%d %H:%M:%S"),
        })
        
        user_object = {
            'name': user_data.get('name'),
            'email': user_data.get('email'),
            'img': user_data.get('imageurl'),
            'gender' : user_data.get('gender'),
            'account_created' : user_data.get('account_created'),
            'last_login' : user_data.get('last_login'),
        }
        request.session['email'] = user_data.get('name')
        return JsonResponse({'success': 'Successfully signed in', 'data': user_object,'status':200},status=200)
    
    except Exception as e:
        return JsonResponse({'error': str(e),'status':500},status=500)
    
@csrf_exempt
def forgetpassword(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')

        if not email:
            return JsonResponse({'error': 'Email is required','status':500})

        ref = db.reference('users')
        user_ref = ref.child(email.replace('.', ','))
        user_data = user_ref.get()

        if user_data:
            token = simple_token_generator(email)
            user_ref.update({'reset_token': token})
            uid = urlsafe_base64_encode(force_bytes(email))
            password_reset_link = f"http://127.0.0.1:3000/Account/change-password/{uid}/{token}/"

            email_context = {
                'site_name' : "GreenVerse",
                'email': email,
                'reset_link': password_reset_link,
            }
            
            email_body = render_to_string('password_reset_email.html', email_context)

            try:
                send_mail(
                    'Password Reset Request',
                    email_body,
                    'support.greenverse@example.com',  
                    [email],
                    fail_silently=False,
                    html_message=email_body,
                )
                return JsonResponse({'success': 'A password reset link has been sent to your email.','status':200})
            except Exception as e:
                return JsonResponse({'error': 'There was an error sending the email.','status':200})

        else:
            return JsonResponse({'error': 'Email does not exist.','status':404})

    else:
        return JsonResponse({'error': 'Only POST method is allowed','status':405})

@csrf_exempt
def changepassword(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        uidb64 = data.get('uid')
        token = data.get('token')
        new_password = data.get('password')

        if not all([uidb64, token, new_password]):
            return JsonResponse({'error': 'All fields are required','status':400})

        try:
            email = force_str(urlsafe_base64_decode(uidb64))
        except (TypeError, ValueError, OverflowError):
            return JsonResponse({'error': 'Invalid user ID','status':400})

        if email and verify_token(email, token):
            user_id = email.replace('.', ',')
            ref = db.reference('users')
            user_ref = ref.child(user_id)

            user_ref.update({
                'password': make_password(new_password),
                'reset_token': None
            })

            return JsonResponse({'success': 'Your password has been updated. You may log in now.','status':200})
        else:
            return JsonResponse({'error': 'The reset password link is invalid or expired','status':400})
    else:
        return JsonResponse({'error': 'Only POST method is allowed','status':405})


def simple_token_generator(email):
    timestamp = str(time.time()).encode('utf-8')
    return hashlib.sha256(email.encode('utf-8') + timestamp).hexdigest()

def verify_token(email, provided_token):
    user_id = email.replace('.', ',')  
    ref = db.reference('users')
    user_ref = ref.child(user_id)
    user_data = user_ref.get()
    stored_token = user_data.get('reset_token', '')

    return stored_token == provided_token

@csrf_exempt
def addpost(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            title = data.get('title')
            description = data.get('description')
            tags = data.get('tags', [])  
            image_urls = data.get('images', [])
            datetime_posted = data.get('datetime', datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))

            if not title or not description:
                return JsonResponse({'error': 'Title and description are required.', 'status':400})

            ai_generated_comment = generate_ai_comment(title, description, image_urls)

            post_data = {
                'title': title,
                'description': description,
                'tags': tags,
                'image_urls': image_urls,
                'datetime': datetime_posted,
                'ai_generated_comment': ai_generated_comment,
            }

            ref = db.reference('posts')
            new_post_ref = ref.push(post_data)

            return JsonResponse({'success': 'Post added successfully', 'post_id': new_post_ref.key, 'ai_generated_comment': ai_generated_comment, 'status':200})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Only POST requests are allowed.', 'status':405}, status=405)

def generate_ai_comment(title, description, image_urls):
    images = []
    for url in image_urls:
        response = requests.get(url)
        img = Image.open(BytesIO(response.content))
        images.append(img)
    
    model = genai.GenerativeModel('gemini-pro-vision')
    prompt = f"Based on the post title, description, and the attached images, please provide a short, helpful and casual comment. Offer advice if it seems to be a query, concern or question, or make a supportive casual comment if not. Focus on being concise and practical. Title: {title}, Desc: {description}"
    
    response = model.generate_content([prompt] + images, stream=True)
    response.resolve()
    return response.text


@csrf_exempt
def fetch_all_posts(request):
    if request.method == 'GET':
        ref = db.reference('posts')
        posts = ref.get()
        return JsonResponse(posts)
    else:
        return JsonResponse({'error': 'Only GET requests are allowed.'}, status=405)

@csrf_exempt
def fetch_posts_by_tag(request, tag):
    if request.method == 'GET':
        ref = db.reference('posts')
        all_posts = ref.get()
        filtered_posts = {key: val for key, val in all_posts.items() if tag in val.get('tags', [])}
        return JsonResponse(filtered_posts)
    else:
        return JsonResponse({'error': 'Only GET requests are allowed.'}, status=405)

@csrf_exempt
def fetch_limited_posts(request):
    try:
        if request.method == 'GET':
            limit = request.GET.get('limit', 5)  
            limit = int(limit)
            ref = db.reference('posts').order_by_child('datetime').limit_to_last(limit)
            posts = ref.get()
            return JsonResponse({"posts": posts})
        else:
            return JsonResponse({'error': 'Only GET requests are allowed.'}, status=405)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@csrf_exempt
def fetch_recent_posts(request):
    try:
        if request.method == 'GET':
            days = request.GET.get('days', 7)  # 
            ref = db.reference('posts').order_by_child('datetime').limit_to_last(50) 
            posts = ref.get()
            return JsonResponse({"posts": posts})
        else:
            return JsonResponse({'error': 'Only GET requests are allowed.'}, status=405)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)