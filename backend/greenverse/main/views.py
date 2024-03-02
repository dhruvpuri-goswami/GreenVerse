from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password,check_password
from django.utils.timezone import now
import json
import firebase_admin
from firebase_admin import db

@csrf_exempt
def signup(request):
    if request.method != "POST":
        return JsonResponse({'error': 'Method not allowed'}, status=405)

    try:
        data = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)

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
        return JsonResponse({'error': 'A user with this email ID already exists.'}, status=409)

    users_ref.set(user_data)
    
    user_object = {
        'name': name,
        'email': email,
        'img': imageurl,
    }

    return JsonResponse({'success': 'Successfully registered. Please log in.', 'data': user_object})



@csrf_exempt
def signin(request):
    if request.method != "POST":
        return JsonResponse({'error': 'Only POST method is allowed'}, status=405)
    
    data = json.loads(request.body)
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return JsonResponse({'error': 'Email and password are required'}, status=400)

    try:
        firebase_email_key = email.replace('.', ',')
        user_ref = db.reference('users').child(firebase_email_key)
        
        user_data = user_ref.get()

        if not user_data:
            return JsonResponse({'error': 'User does not exist'}, status=404)

        if not check_password(password, user_data.get('password')):
            return JsonResponse({'error': 'Incorrect password'}, status=401)

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
        return JsonResponse({'success': 'Successfully signed in', 'data': user_object})
    
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)