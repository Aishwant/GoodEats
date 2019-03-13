from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets, permissions, generics
import goodeats9.firebase as firebase

class getDataAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def get(self,request):
        try:
            return Response(firebase.getRestaurant(request))
        except:
            return Response({
                "status":"Disconnected"
            })

class getRestaurantByZipAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def get(self, request, zip):
        try:
            return Response(firebase.getRestaurantByZip(request, zip))
        except:
            return Response({
                "status":"Disconnected"
            })

class getRestaurantByIDAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def get(self, request, uID):
        try:
            return Response(firebase.getRestaurantByID(request, uID))
        except:
            return Response({
                "status":"Disconnected"
            })

class addRestaurantAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request, uID):
        try:
            db = firebase.addRestaurant(request.data, uID)
            return Response({
                "status": "success"
            })
        except:
            return Response({
                "status":"Disconnected",
                "msg": 'There was a problem'
            })

class deleteRestaurantAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def get(self, request, rID, uID):
        try:
            db = firebase.deleteRestaurant(request, rID, uID)
            return Response({
                "status": "success"
            })
        except:
            return Response({
                "status":"Disconnected",
                "msg": 'There was a problem'
            })

class getUserAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def get(self, request, uID):
        try:
            return Response(firebase.getUser(request, uID))
        except:
            return Response({
                "status":"Disconnected"
            })

class pushCustomerDataAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def post(self,request):
        try:
            db = firebase.addCustomer(request.data)
            return Response({
                "status": "success"
            })
        except:
            return Response({
                "status":"Disconnected",
                "msg": 'There was a problem'
            })