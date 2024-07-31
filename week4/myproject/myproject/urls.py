"""
URL configuration for myproject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from authentication.views import register, login, logout, home, create_post, edit_post, delete_post, post_list

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),  
    path('register/', register, name='register'),
    path('login/', user_login, name='login'),
    path('logout/', user_logout, name='logout'),
    path('home/', home, name='home'),
    path('create/', create_post, name='create_post'),
    path('edit/<int:id>/', edit_post, name='edit_post'),
    path('delete/<int:id>/', delete_post, name='delete_post'),
    path('posts/', post_list, name='post_list'),
    path('api/', include('authentication.urls')),  

    path('accounts/', include('django.contrib.auth.urls')),
]

