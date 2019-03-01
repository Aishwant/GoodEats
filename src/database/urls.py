from django.urls import path,include
from .api import getDataAPI

urlpatterns = [
    path('api/data/get',getDataAPI.as_view()),
]