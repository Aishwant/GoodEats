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
class getMenuAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def get(self, request,rID):
        try:
            return Response(firebase.getMenu(request,rID))
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

class addMenuAPI(generics.GenericAPIView):
    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request):
        try:
            print(request.data)
            db = firebase.addMenu(request.data)
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

class editRestaurantAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request):
        try:
            db = firebase.editRestaurant(request.data)
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
            firebase.addCustomer(request.data)
            return Response({
                "status": "success"
            })
        except:
            return Response({
                "status":"Disconnected",
                "msg": 'There was a problem'
            })

class getCartAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def get(self, request, uID):
        try:
            return Response(firebase.getCart(request, uID))
        except:
            return Response({
                "status":"Disconnected"
            })

class addToCartAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request, uID):
        try:
            db = firebase.addToCart(request.data, uID)
            return Response({
                "status": "success"
            })
        except:
            return Response({
                "status":"Disconnected",
                "msg": 'There was a problem while adding item to cart'
            })

class deleteCartItemAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def get(self, request, itemID, uID):
        try:
            db = firebase.deleteCartItem(request, itemID, uID)
            return Response({
                "status": "success"
            })
        except:
            return Response({
                "status":"Disconnected",
                "msg": 'There was a problem deleting the item from the cart'
            })
