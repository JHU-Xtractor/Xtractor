import boto3

sns = boto3.client('sns')

SNS_TOPIC  = "arn:aws:sns:us-east-1:214775916492:xtractor_new_file"

def lambda_handler(event, context):

    # from s3 trigger of new file
    file = event['Records'][0]['s3']['object']['key']

    # send message to sns
    sns.publish(
        TopicArn=SNS_TOPIC,
        Message=file
    )