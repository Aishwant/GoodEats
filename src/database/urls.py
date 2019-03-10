from django.urls import path,include
from .api import getDataAPI, pushCustomerDataAPI, getUserAPI, getRestaurantByZipAPI, getRestaurantByIDAPI

urlpatterns = [
    path('api/database/get',getDataAPI.as_view()),
    path('api/database/newuser',pushCustomerDataAPI.as_view()),
    path('api/database/getUser/<slug:uID>',getUserAPI.as_view()),
    path('api/database/getRestByZip/<slug:zip>',getRestaurantByZipAPI.as_view()),
    path('api/database/getRestByID/<slug:uID>',getRestaurantByIDAPI.as_view()),
]