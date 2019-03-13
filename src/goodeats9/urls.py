from django.urls import path, include

urlpatterns = [
    path('',include('frontend.urls')),
    path('',include('authentication.urls')),
    path('',include('database.urls'))
]