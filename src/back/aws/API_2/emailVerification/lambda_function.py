

import boto3

def lambda_handler(event, context):
    """
    This function is called when the user clicks on the link in the email
    sent to them after they register. It verifies their email address.
    """

