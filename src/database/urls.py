from django.urls import path,include
from .api import getDataAPI, pushCustomerDataAPI

urlpatterns = [
    path('api/database/get',getDataAPI.as_view()),
    path('api/database/newuser',pushCustomerDataAPI.as_view()),
]