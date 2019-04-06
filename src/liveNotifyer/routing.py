from django.urls import path,include, re_path

from . import consumer

websocket_urlpatterns=[
    re_path(r'^ws/order/(?P<owner_id>[^/]+)/$',consumer.dataConsumer)
    # path(r'^ws/chat/(?P<room_name>[^/]+)/$',consumer.dataConsumer),
]
