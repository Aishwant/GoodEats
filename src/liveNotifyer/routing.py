from django.urls import path,include, re_path

from . import consumer

websocket_urlpatterns=[
    # path('ws/order/owner',consumer.dataConsumer)
    re_path(r'^ws/order/(?P<owner>[^/]+)/$',consumer.dataConsumer),
]
