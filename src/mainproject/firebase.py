from django.shortcuts import render
import pyrebase
import string
import random

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

randVal =''
def rand():
    randVal = ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(N))


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

def getUser(request, uID):
    db = credentials().database()
    return (dict(db.child("Users").child(uID).get().val()))

#For customer dashboard
def getRestaurantByZip(request, zip):
    db = credentials().database()
    restaurants = (dict(db.child("Restaurants").get().val()))
    data = {}
    for key, value  in restaurants.items():
        for k, v in value.items():  
            if(k == "zipcode" and v == (int(zip))):
                data[key] = value
    return data

#For owner dashboard
def getRestaurantByID(request, uID):
    db = credentials().database()
    restaurantsOwned = (dict(db.child("Users").child(uID).child("Owner").child("rIDS").get().val()))
    print(restaurantsOwned)
    data = {}
    for key, value in restaurantsOwned.items():
        data[value] = db.child("Restaurants").child(value).get().val()   
    return data

 ##### Writing To Database #####
def addOwner(request):
    db = credentials().database()
    request.update()
    return db.child('Users').child(request['uID']).child("Owner")

def addCustomer(request):
    db = credentials().database()

    
    if (request['data']["changeC"]==True):
        request['data'].pop("rname")
        request['data'].pop("changeC")
        request['data'].pop("changeD")
        request['data'].pop("changeO")
        db.child('Users').child(request['uID']).child("Customer").set(request['data'])

    elif(request['data']["changeO"]==True):
        request['data'].pop("changeC")
        request['data'].pop("changeD")
        request['data'].pop("changeO")
        db.child('Users').child(request['uID']).child("Owner").set(request['data'])

    elif(request['data']["changeD"]==True):
        request['data'].pop("rname")
        request['data'].pop("changeC")
        request['data'].pop("changeD")
        request['data'].pop("changeO")
        db.child('Users').child(request['uID']).child("Driver").set(request['data'])


def addDeliveryDriver(request):
    db = credentials().database()
    request['data'].pop("changeC")
    request['data'].pop("changeD")
    request['data'].pop("changeO")
    request['data'].pop("rname")
    print(request)
    return db.child('Users').child(request['uID']).child("Driver").set(request['data'])

