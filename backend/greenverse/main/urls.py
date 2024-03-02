from django.urls import path
from . import views

urlpatterns = [
    path('signup/',views.signup,name='signup'),
    path('signin/',views.signin,name='signin'),
    path('forget-password/',views.forgetpassword,name='forgetpassword'),
    path('change-password/',views.changepassword,name='changepassword'),
    path('add-post/',views.addpost,name='addpost'),
    path('posts/all/', views.fetch_all_posts, name='fetch_all_posts'),
    path('posts/limited/', views.fetch_limited_posts, name='fetch_limited_posts'),
    path('posts/recent/', views.fetch_recent_posts, name='fetch_recent_posts'),
    path('posts/by-tag/<str:tag>/', views.fetch_posts_by_tag, name='fetch_posts_by_tag'),
]
