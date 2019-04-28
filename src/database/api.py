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
                # "status":"Disconnected"
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
class editMenuAPI(generics.GenericAPIView):
    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request):
        try:
            print(request.data)
            db = firebase.editMenu(request.data)
            return Response({
                "status": "success"
            })
        except:
            return Response({
                "status":"Disconnected",
                "msg": 'There was a problem'
            })

class deleteMenuAPI(generics.GenericAPIView):
    permission_classes=[
        permissions.AllowAny
    ]
    def get(self, request,rID,Menu_Type,iID):
        try:
            db=firebase.deleteMenu(rID,Menu_Type,iID)
            return Response({
                "status":"sucess"

            })
        except:
            return Response({
                "status":"Disconnected"
                 
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
                # "status":"Disconnected"
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

    def get(self, request, rID, itemID, uID):
        try:
            db = firebase.deleteCartItem(request, rID, itemID, uID)
            return Response({
                "status": "success"
            })
        except:
            return Response({
                "status":"Disconnected",
                "msg": 'There was a problem deleting the item from the cart'
            })

class addCategoryAPI(generics.GenericAPIView):
    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request):
        try:
            db = firebase.addCategory(request.data)
            return Response({
                "status": "success"
            })
        except:
            return Response({
                "status":"Disconnected",
                "msg": 'There was a problem'
            })

class getCategoriesAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def get(self, request, rID):
        try:
            return Response(firebase.getCategories(request, rID))
        except:
            return Response({
            })

class getItemsAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request):
        try:
            return Response(firebase.getItems(request.data))
        except:
            return Response({
                "status":"Disconnected"
            })

class addItemAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request):
        try:
            return Response(firebase.addItem(request.data))
        except:
            return Response({
                "status":"Disconnected"
            })

class deleteCategoryAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request):
        try:
            db = firebase.deleteCategory(request.data)
            return Response({
                "status": "success"
            })
        except:
            return Response({
                "status":"Disconnected",
                "msg": 'There was a problem deleting the category'
            })

class deleteItemAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request):
        try:
            db = firebase.deleteItem(request.data)
            return Response({
                "status": "success"
            })
        except:
            return Response({
                "status":"Disconnected",
                "msg": 'There was a problem deleting the item from the menu'
            })

class editItemAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request):
        try:
            return Response(firebase.editItem(request.data))
        except:
            return Response({
                "status":"Disconnected"
            })

class editCategoryAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request):
        try:
            return Response(firebase.editCategory(request.data))
        except:
            return Response({
                "status":"Disconnected"
            })

class getItemCountAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def get(self, request, uID):
        return Response(firebase.getItemCount(request, uID))

class getOrderCountAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def get(self, request, uID):
        return Response(firebase.getOrderCount(request, uID))


class editInstructionsAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request):
        try:
            return Response(firebase.editInstructions(request.data))
        except:
            return Response({
                "status":"Disconnected"
            })

class editMyProfileAPI(generics.GenericAPIView):
    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request):
        try:
            print("reached")
            print(request.data)
            return Response(firebase.editMyProfile(request.data))
        except:
            return Response({
                "status":"Disconnected"
            })

class placeOrderAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request):
        try:
            return Response(firebase.placeOrder(request.data))
        except:
            return Response({
                
            })

class acceptPendingOrderAPI(generics.GenericAPIView):
    
    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request):
        try:
            return Response(firebase.acceptPendingOrder(request.data))
        except:
            return Response({
                "status":"Disconnected"
            })


class rejectPendingOrderAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request):
        try:
            return Response(firebase.rejectPendingOrder(request.data))
        except:
            return Response({
                "status":"Disconnected"
            })

class acceptPendingDevOrderAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request):
        try:
            return Response(firebase.acceptPendingDevOrder(request.data))
        except:
            return Response({
                "status":"Disconnected"
            })


class orderDeliveredAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request):
        try:
            return Response(firebase.orderDelivered(request.data))
        except:
            return Response({
                "status":"Disconnected"
            })