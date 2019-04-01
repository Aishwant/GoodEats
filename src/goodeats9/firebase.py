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

def getItemCount(request, uID):
    db = credentials().database()
    items = db.child('Users').child(uID).child('Customer').child('Cart').get().val()
    itemCount = 0
    for k1, v1 in items.items():
        for k2, v2 in v1.items():
            if(k2 == "Quantity"):
                itemCount += int(v2)
    return itemCount

 ##### Writing To Database #####
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

        rID = request.pop('resID') 
        restaurantData = {}
        restaurantData['Name'] = request['data'].pop('name')
        restaurantData['CuisineType'] = request['data'].pop('CuisineType')
        restaurantData['Address'] = request['data'].pop('address')
        restaurantData['City'] = request['data'].pop('city')
        restaurantData['zipcode'] = request['data'].pop('zipcode')
        restaurantData['Open'] = request['data'].pop('open')
        restaurantData['Close'] = request['data'].pop('close')
        formattedData = {rID : restaurantData}

        addRestaurant(formattedData, request['uID'])

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

def addRestaurant(request, uID):
    db = credentials().database()
    for key in request:
        rID = key
    db.child('Restaurants').update(request)
    
    return db.child('Users').child(uID).child('Owner').child('rIDS').push(rID)

def addToCart(request, uID):
    db = credentials().database()
    itemID = request.pop("itemID")
    itemData = request['itemData']
    itemData['Quantity'] = request['Quantity']
    data = { itemID : itemData}
    return db.child("Users").child(uID).child("Customer").child("Cart").update(data) 

def addCategory(request):
    db = credentials().database()
    return db.child("Restaurants").child(request['rID']).child("Menu").child(request['newCategory']).set(request['placeholderItem'])

def addItem(request):
    db = credentials().database()
    tags = db.child("Restaurants").child(request['rID']).child('tags').get().val()
    if(tags):
        db.child("Restaurants").child(request['rID']).child('tags').set(request['tags']+", "+tags)    
    else:
        db.child("Restaurants").child(request['rID']).child('tags').set(request['tags'])
    return db.child("Restaurants").child(request['rID']).child("Menu").child(request['category']).update(request['newItem'])


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

def deleteCategory(request):
    db = credentials().database()
    return db.child("Restaurants").child(request['rID']).child("Menu").child(request['category']).remove()

def deleteItem(request):
    db = credentials().database()
    return db.child("Restaurants").child(request['rID']).child("Menu").child(request['category']).child(request['item']).remove()

##### Update Database #####
def editRestaurant(request):
    db = credentials().database()
    rID = request.pop('rID')
    return db.child("Restaurants").child(rID).update(request)

def editItem(request):
    db = credentials().database()
    rID = request.pop('rID')
    category = request.pop('category')
    itemID = request.pop('itemID')
    return db.child("Restaurants").child(rID).child("Menu").child(category).child(itemID).update(request)

def editCategory(request):
    db = credentials().database()
    rID = request.pop('rID')
    category = request.pop('category')
    Name = request.pop('Name')
    newCategory = { Name : (dict(db.child("Restaurants").child(rID).child("Menu").child(category).get().val()))}
    db.child("Restaurants").child(rID).child("Menu").child(category).remove()
    return db.child("Restaurants").child(rID).child("Menu").update(newCategory)

def editInstructions(request):
    db = credentials().database()
    data = {"Instructions" : request['Instructions']}
    return db.child("Users").child(request['uID']).child("Customer").child("Cart").child(request['itemID']).update(data)