from django.urls import path

from .views import *

urlpatterns = [
    path('', index, name = 'home'),
    path('map/', show_map, name = 'vdnh_map'),
    path('about/', about, name = 'about'),
    path('login/', login_user,name = 'login'),
]