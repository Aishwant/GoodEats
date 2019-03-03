from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets, permissions, generics
import mainproject.firebase as firebase

# Register API
class RegisterAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def post(self,request):
        try:
            firebaseResult = firebase.register(request.data)
            return Response({
                'uID': firebaseResult['localId'],
                'token': firebaseResult['idToken']
            })
        except:
            return Response({
                'status':'false',
                'msg': "Invalid Credentials / Email already exists"
            })


# Login API
class LoginAPI(generics.GenericAPIView):
    permission_classes=[
        permissions.AllowAny
    ]

    def post(self,request):
        try:
            firebaseResult = firebase.login(request.data)
            if firebase:
                return Response({
                    'uID': firebaseResult['localId'],
                    'token': firebaseResult['idToken']
                })
        except:
            return Response({
                'status':'false',
                'msg': "Invalid Credentials"
            })


#Forgot Password API
class ForgotPwdAPI(generics.GenericAPIView):
    permission_classes=[
        permissions.AllowAny
    ]

    def post(self,request):
        try:
            firebaseResult = firebase.forgotPwd(request.data)
            if firebase:
                return Response({
                    'msg':"An email has been sent to your email"
                })
        except:
            return Response({
                'msg':"Invalid Email",
                'status': 'false'
            })