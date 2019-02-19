from django.shortcuts import render
import pyrebase

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

def login(request):
    auth = credentials().auth()
    print("reached")
    return auth.sign_in_with_email_and_password(request['email'], request['pwd'])

def register(request):
    auth = credentials().auth()
    print("reached")
    return auth.create_user_with_email_and_password(request['email'], request['pwd'])