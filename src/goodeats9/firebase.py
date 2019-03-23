from django.shortcuts import render
import pyrebase
import string
import random
import uuid

# Firebase credentials

def credentials():
    config = {
        "apiKey": "AIzaSyBJJSSETfxQc9tmsbOI-dmlQOG_dbiS3_4",
        "authDomain": "csci387.firebaseapp.com",
        "databaseURL": "https://csci387.firebaseio.com",
        "projectId": "csci387",
        "storageBucket": "csci387.appspot.com",
        "messagingSenderId": "930472814810"
    }

    firebase = pyrebase.initialize_app(config)

    return firebase

############# Random String Creator ###############

def getUniqueID():
    return uuid.uuid1()

##################################################




########################### Authentication Starts ################################

# To LOGIN
def login(request):
    auth = credentials().auth()
    return auth.sign_in_with_email_and_password(request['email'], request['pwd'])

# To REGISTER
def register(request):
    auth = credentials().auth()
    return auth.create_user_with_email_and_password(request['email'], request['pwd'])

# Forgot Password
def forgotPwd(request):
    auth = credentials().auth()
    return auth.send_password_reset_email(request["email"])


########################### Authentication Ends #################################



########################### Database Starts ####################################

 ##### Reading From Database #####
def getRestaurant(request):
    db = credentials().database()
    return (dict(db.child("Restaurants").get().val()))

def getData(request):
    db = credentials().database()
    return (dict(db.child(request).get().val()))

def getUser(request, uID):
    db = credentials().database()
    return (dict(db.child("Users").child(uID).get().val()))

#For owner dashboard
def getRestaurantByID(request, uID):
    db = credentials().database()
    restaurantsOwned = (dict(db.child("Users").child(uID).child("Owner").child("rIDS").get().val()))
    data = {}
    for key, value in restaurantsOwned.items():
        data[value] = db.child("Restaurants").child(value).get().val()   
    return data

def getCart(request, uID):
    db = credentials().database()
    return (dict(db.child("Users").child(uID).child("Customer").child("Cart").get().val()))

def getCategories(request, rID):
    db = credentials().database()
    return (dict(db.child("Restaurants").child(rID).child("Menu").get().val()))

def getItems(request):
    db = credentials().database()
    return (dict(db.child("Restaurants").child(request['rID']).child("Menu").child(request['category']).get().val()))

 ##### Writing To Database #####
def addOwner(request):
    db = credentials().database()
    request.update()
    return db.child('Users').child(request['uID']).child("Owner")

def addCustomer(request):
    db = credentials().database()

    
    if (request['data']["changeC"]==True):
        request['data'].pop("changeC")
        request['data'].pop("changeD")
        request['data'].pop("changeO")
        request['data'].pop("open")
        request['data'].pop("close")
        request['data'].pop("name")
        db.child('Users').child(request['uID']).child("Customer").set(request['data'])

    elif(request['data']["changeO"]==True):
        request['data'].pop("changeC")
        request['data'].pop("changeD")
        request['data'].pop("changeO")

        restaurantData = {}
        restaurantData['Name'] = request['data'].pop('name')
        restaurantData['Address'] = request['data'].pop('address')
        restaurantData['City'] = request['data'].pop('city')
        restaurantData['zipcode'] = request['data'].pop('zipcode')
        restaurantData['Open'] = request['data'].pop('open')
        restaurantData['Close'] = request['data'].pop('close')

        addRestaurant(restaurantData, request['uID'])

        db.child('Users').child(request['uID']).child("Owner").update(request['data'])

    elif(request['data']["changeD"]==True):
        request['data'].pop("changeC")
        request['data'].pop("changeD")
        request['data'].pop("changeO")
        request['data'].pop("open")
        request['data'].pop("close")
        request['data'].pop("address")
        request['data'].pop("name")
        request['data'].pop("city")
        db.child('Users').child(request['uID']).child("Driver").set(request['data'])


def addDeliveryDriver(request):
    db = credentials().database()
    request['data'].pop("changeC")
    request['data'].pop("changeD")
    request['data'].pop("changeO")
    request['data'].pop("rname")
    print(request)
    return db.child('Users').child(request['uID']).child("Driver").set(request['data'])

def addRestaurant(request, uID):
    db = credentials().database()
    rID = getUniqueID()
    db.child('Users').child(uID).child('Owner').child('rIDS').push(str(rID))
    return db.child('Restaurants').child(rID).set(request)

def addMenu(request):   
    db=credentials().database()
    mType = request['Menu_Type']
    rID=request['rID']
    iID = getUniqueID()
    
    request.pop("Menu_Type")
    request.pop('rID')
   
    print(rID)
    print(request)
    return db.child('Restaurants').child(rID).child("Menu").child(mType).push(request)

#For owner dashboard
def getMenu(request,rID):
    db = credentials().database()
    return dict(db.child('Restaurants').child(rID).child("Menu").get().val())

def addToCart(request, uID):
    db = credentials().database()
    return db.child("Users").child(uID).child("Customer").child("Cart").update(request)

def addCategory(request):
    db = credentials().database()
    placeholderItemID = getUniqueID()
    placeholderItem = {str(placeholderItemID) : {"Name":"Item Name", "Description":"Item Description", "Price":"Item Price", "Quantity":"Item Quantity"}}
    print(placeholderItem)
    return db.child("Restaurants").child(request['rID']).child("Menu").child(request['newCategory']).set(placeholderItem)


##### Delete from Database #####
def deleteRestaurant(request, rID, uID):
    db = credentials().database()
    restaurantsOwned = (dict(db.child("Users").child(uID).child("Owner").child("rIDS").get().val()))
    
    for key, value in restaurantsOwned.items():
        if(value == rID):
            restaurantKey = key
    
    db.child("Users").child(uID).child("Owner").child("rIDS").child(restaurantKey).remove()
    return db.child("Restaurants").child(rID).remove()

def deleteCartItem(request, itemID, uID):
    db = credentials().database()
    return db.child("Users").child(uID).child("Customer").child("Cart").child(itemID).remove()

##### Update Database #####
def editRestaurant(request):
    db = credentials().database()
    rID = request.pop('rID')
    return db.child("Restaurants").child(rID).update(request)
