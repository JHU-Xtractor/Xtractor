import boto3

sns = boto3.client('sns')
sqs = boto3.client('sqs')

SNS_TOPIC  = "arn:aws:sns:us-east-1:214775916492:xtractor_api_3_new_file"
SQS_URL = "TODO"


def publishToSQS(file):
    """
    This function publishes the file to the SQS queue
    :param file: the file to be published
    """
    # Publish the file to the SQS queue
    response = sqs.send_message(
        QueueUrl=SQS_URL,
        MessageBody=file,
        MessageGroupId='xtractor',
        MessageDeduplicationId=file
    )
    
    # Return the response
    return response

def lambda_handler(event, context):

    file = event['Records'][0]['s3']['object']['key']
    
    # send message to sns
    sns.publish(
        TopicArn=SNS_TOPIC,
        Message=file
    )