import boto3
import json
import table_detection
s3 = boto3.resource('s3')

XTRACTOR_BUCKET = "xtractor-main"

def lambda_handler(event, context):
    """
    This function gets all the tables from an image
    :param event: the event for the lambda (using proxy integration)
    """

    ################# GET FILE FROM SQS #################

    file = event['pathParameters']['file']

    ################# CHECK IF FILE EXISTS ##############
    try:
        s3.Object(XTRACTOR_BUCKET, file).load()
    except:
        return {
            'statusCode': 404,
            'body': json.dumps("File not found")
        }

    ################# GET TABLES ########################
    tables = table_detection.get_tables(file)

    ################# RETURN FILE #######################
    return {
        'statusCode': 200,
        'body': json.dumps(tables)
    }

    


