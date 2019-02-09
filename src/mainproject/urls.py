from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('', include('leads.urls')),
]
