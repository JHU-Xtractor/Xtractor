import sys
def handler(event, context):
    """
    This function is triggered by SQS and will generate results from a pdf file
    while also uploading them to S3 and publishing a notification to SNS
    :param: event: dictionary containing userName and file
    :param: context: lambda context (not used)
    """
    # TODO - implement once model is finished
    return 'Hello from AWS Lambda using Python' + sys.version + '!'