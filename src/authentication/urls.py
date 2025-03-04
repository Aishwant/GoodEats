from django.urls import path,include
from .api import RegisterAPI, LoginAPI, ForgotPwdAPI

urlpatterns = [
    path('api/auth/register',RegisterAPI.as_view()),
    path('api/auth/login',LoginAPI.as_view()),
    path('api/auth/forgotpwd', ForgotPwdAPI.as_view()),
]