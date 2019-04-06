from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
import json

class dataConsumer(WebsocketConsumer):
    def connect(self):
        self.owner_ID = self.scope['url_route']['kwargs']['owner_ID']
        self.order_group_name = 'order_%s' % self.owner_ID

        # Join order group
        async_to_sync(self.channel_layer.group_add)(
            self.order_group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave order group
        async_to_sync(self.channel_layer.group_discard)(
            self.order_group_name,
            self.channel_name
        )

    # Receive message from WebSocket
    def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        # Send message to order group
        async_to_sync(self.channel_layer.group_send)(
            self.order_group_name,
            {
                'type': 'order',
                'message': message
            }
        )

    # Receive message from order group
    def order_message(self, event):
        message = event['message']

        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'message': message
        }))