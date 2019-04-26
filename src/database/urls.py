from django.urls import path,include
from .api import getDataAPI
from .api import pushCustomerDataAPI
from .api import getUserAPI 
from .api import getRestaurantByIDAPI
from .api import addRestaurantAPI
from .api import deleteRestaurantAPI
from .api import editRestaurantAPI
from .api import getCartAPI, addToCartAPI, deleteCartItemAPI
from .api import addCategoryAPI, getCategoriesAPI, deleteCategoryAPI, editCategoryAPI
from .api import getItemsAPI, addItemAPI, deleteItemAPI, editItemAPI
from .api import getItemCountAPI
from .api import getOrderCountAPI
from .api import editInstructionsAPI
from .api import editMyProfileAPI
from .api import placeOrderAPI
from .api import rejectPendingOrderAPI, acceptPendingOrderAPI
from .api import acceptPendingDevOrderAPI, orderDeliveredAPI
from .api import getMyRestaurantsOrdersAPI

urlpatterns = [
    path('api/database/get',getDataAPI.as_view()),
    path('api/database/newuser',pushCustomerDataAPI.as_view()),
    path('api/database/getUser/<slug:uID>',getUserAPI.as_view()),
    path('api/database/getRestByID/<slug:uID>',getRestaurantByIDAPI.as_view()),
    path('api/database/addRestaurant/<slug:uID>', addRestaurantAPI.as_view()),
    path('api/database/deleteRestaurant/<slug:rID>/<slug:uID>', deleteRestaurantAPI.as_view()),
    path('api/database/editRestaurant/',editRestaurantAPI.as_view()),
    path('api/database/getCart/<slug:uID>',getCartAPI.as_view()),
    path('api/database/addToCart/<slug:uID>',addToCartAPI.as_view()),
    path('api/database/deleteCartItem/<slug:rID>/<slug:itemID>/<slug:uID>', deleteCartItemAPI.as_view()),
    path('api/database/addCategory',addCategoryAPI.as_view()),
    path('api/database/getCategories/<slug:rID>',getCategoriesAPI.as_view()),
    path('api/database/getItems', getItemsAPI.as_view()),
    path('api/database/addItemToCategory', addItemAPI.as_view()),
    path('api/database/deleteCategory', deleteCategoryAPI.as_view()),
    path('api/database/deleteItem', deleteItemAPI.as_view()),
    path('api/database/editItem', editItemAPI.as_view()),
    path('api/database/editCategory', editCategoryAPI.as_view()),
    path('api/database/getItemCount/<slug:uID>', getItemCountAPI.as_view()),
    path('api/database/getOrderCount/<slug:uID>', getOrderCountAPI.as_view()),
    path('api/database/editInstructions', editInstructionsAPI.as_view()),
    path('api/database/editmyprofile',editMyProfileAPI.as_view()),
    path('api/database/placeOrder', placeOrderAPI.as_view()),
    path('api/database/rejectPendingOrder', rejectPendingOrderAPI.as_view()),
    path('api/database/acceptPendingOrder', acceptPendingOrderAPI.as_view()),
    path('api/database/acceptPendingDevOrder', acceptPendingDevOrderAPI.as_view()),
    path('api/database/orderDelivered', orderDeliveredAPI.as_view()),
    path('api/database/getMyRestaurantsOrders/<slug:uID>', getMyRestaurantsOrdersAPI.as_view()),
]