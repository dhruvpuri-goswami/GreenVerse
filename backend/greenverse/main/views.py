from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password
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

