from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path, include

urlpatterns = [
    path('',include('frontend.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('',include('authentication.urls')),
]

urlpatterns = format_suffix_patterns(urlpatterns)