from django.contrib import admin
from .models import UserProfile

from .models import Post

admin.site.register(Post)


class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'phone_number']

admin.site.register(UserProfile, UserProfileAdmin)


