from django.urls import path
from . import views

urlpatterns = [
    path('signup/',views.signup,name='signup'),
    path('signin/',views.signin,name='signin'),
    path('forget-password/',views.forgetpassword,name='forgetpassword'),
    path('change-password/',views.changepassword,name='change-password'),
]
