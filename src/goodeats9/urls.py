from django.urls import path, include
from .email import sendEmailAPI

urlpatterns = [
    path('',include('frontend.urls')),
    path('',include('authentication.urls')),
    path('',include('database.urls')),
    path('api/sendemail', sendEmailAPI.as_view())
]