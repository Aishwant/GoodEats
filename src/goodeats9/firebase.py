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
            if(k2 != "total"):
                for k3, v3 in v2.items():
                    if(k3 == "Quantity"):
                        itemCount += int(v3)
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
        request['data'].pop('owner_ID')
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
        restaurantData['owner_ID'] = request['data'].pop('owner_ID')
        formattedData = {rID : restaurantData}

        addRestaurant(formattedData, request['uID'])

        request['data']['Address1'] = ""
        request['data']['Address2'] = ""
        request['data']['Phone'] = ""
        request['data']['city'] = ""
        request['data']['zipcode'] = ""
        request['data']['email'] = credentials().auth().get_account_info(request['token'])['users'][0]['email']
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
        request['data'].pop('owner_ID')
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
    rID = itemData['rID']
    existingQuantity = db.child("Users").child(uID).child("Customer").child("Cart").child(rID).child(itemID).child("Quantity").get().val()
    if(existingQuantity != None):
        newQuantity = int(request['Quantity'])+int(existingQuantity)
        itemData['Quantity'] = newQuantity
    else:
        itemData['Quantity'] = request['Quantity']

    data = { itemID : itemData}

    total = db.child("Users").child(uID).child("Customer").child("Cart").child(rID).child("total").get().val()
    if(total != None):
        total = float(total)
        total += float(itemData['Price'])*float(request['Quantity'])
    else: 
        total = 0.0
        total += float(itemData['Price'])*float(request['Quantity'])

    total = round(total, 2)
    db.child("Users").child(uID).child("Customer").child("Cart").child(rID).child("total").set(str(total))

    return db.child("Users").child(uID).child("Customer").child("Cart").child(rID).update(data) 

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

def deleteCartItem(request, rID, itemID, uID):
    db = credentials().database()

    total = float(db.child("Users").child(uID).child("Customer").child("Cart").child(rID).child("total").get().val())
    priceToRemove = float(db.child("Users").child(uID).child("Customer").child("Cart").child(rID).child(itemID).child("Price").get().val())
    quantityToRemove = float(db.child("Users").child(uID).child("Customer").child("Cart").child(rID).child(itemID).child("Quantity").get().val())
    newTotal = total - priceToRemove*quantityToRemove
    newTotal = round(newTotal, 2)
    if(newTotal == 0):
        return db.child("Users").child(uID).child("Customer").child("Cart").child(rID).remove()
    db.child("Users").child(uID).child("Customer").child("Cart").child(rID).child("total").set(newTotal)
    return db.child("Users").child(uID).child("Customer").child("Cart").child(rID).child(itemID).remove()

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
    return db.child("Users").child(request['uID']).child("Customer").child("Cart").child(request['rID']).child(request['itemID']).update(data)
    
def editMyProfile(request):
    db = credentials().database()
    print("reached")
    return db.child("Users").child(request['uID']).child(request["data"].pop('user_id')).update(request['data'])



###################### ORDER FUNCTIONS HERE ##############################

def placeOrder(request):
    db = credentials().database()
    rID = ""
    owner_ID = ""
    uID = ""
    orderID = ""
    for k1, v1 in request.items():
        orderID = k1
        for k2, v2 in v1.items():
            if(k2 == "rID"):
                rID = v2
            if(k2 == "owner_ID"):
                owner_ID = v2
            if(k2 == "uID"):
                uID = v2

    request[orderID]['status'] = "PENDING"
    db.child("Users").child(uID).child("Customer").child("Cart").child(rID).remove()
    db.child("Users").child(uID).child("Customer").child("Orders").update(request)
    return db.child("Users").child(owner_ID).child("Owner").child("Orders").update(request)
    

def acceptPendingOrder(request):
    db = credentials().database()
    data = {"status":"ACCEPTED_BY_OWNER"}
    db.child("Users").child(request['order']['uID']).child("Customer").child("Orders").child(request['orderID']).update(data)
    db.child("Users").child(request['ownerID']).child("Owner").child("Orders").child(request['orderID']).remove()
    db.child("Orders").child('ToBeDev').child(request['rID']).child(request['orderID']).set(request['order'])

def rejectPendingOrder(request):
    db = credentials().database()
    data = {"status":"REJECTED"}
    db.child("Users").child(request['order']['uID']).child("Customer").child("Orders").child(request['orderID']).update(data)
    return db.child("Users").child(request['ownerID']).child("Owner").child("Orders").child(request['orderID']).remove()

def acceptPendingDevOrder(request):
    db = credentials().database()
    data = {"status":"ON_DELIVERY"}
    db.child("Users").child(request['order']['uID']).child("Customer").child("Orders").child(request['orderID']).update(data)
    db.child('Orders').child('ToBeDev').child(request['rID']).child(request['orderID']).remove()
    return db.child('Orders').child('OnDev').child(request['uId']).child(request['rID']).child(request['orderID']).set(request['order'])

def orderDelivered(request):
    db = credentials().database()
    data = {"status":"DELIVERED"}
    db.child("Users").child(request['order']['uID']).child("Customer").child("Orders").child(request['orderID']).update(data)
    db.child('Orders').child('OnDev').child(request['uId']).child(request['rID']).child(request['orderID']).remove()
    db.child('Orders').child('Delivered').child(request['orderID']).set(request['order'])
    db.child("Users").child(request['uId']).child("Driver").child("Devlivered").child(request['orderID']).set(request['order'])