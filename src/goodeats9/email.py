from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response

class sendEmailAPI(generics.GenericAPIView):

    permission_classes=[
        permissions.AllowAny
    ]

    def post(self, request):
        message = Mail(
            from_email='admin@goodeats9.com',
            to_emails=request.data['email'],
            subject='Your Order Status',
            html_content='<strong> Your order is '+request.data['status']+'</strong>')
        
        try:
            sg = SendGridAPIClient('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')
            response = sg.send(message)
            return Response()
        except Exception as e:
            print(e.message)
