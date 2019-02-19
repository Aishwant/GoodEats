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
        firebaseResult = firebase.register(request.data)
        if firebase:
            return Response({
                'uID': firebaseResult['localId'],
                'token': firebaseResult['idToken']
            })


# Login API
class LoginAPI(generics.GenericAPIView):
    permission_classes=[
        permissions.AllowAny
    ]

    def post(self,request):
        firebaseResult = firebase.login(request.data)
        if firebase:
            return Response({
                'uID': firebaseResult['localId'],
                'token': firebaseResult['idToken']
            })