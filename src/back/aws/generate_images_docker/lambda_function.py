# import module
import boto3
import botocore
from botocore.exceptions import ClientError
from pdf2image import convert_from_path
import json

# constants - AWS
BUCKET = "xtractor-main"
s3 = boto3.resource("s3")
s3Client = boto3.client("s3")
sqs = boto3.client("sqs")
sns = boto3.client("sns")
ARN = "arn:aws:sns:us-east-1:214775916492:xtractor_images_created"

QUEUE_URL = (
    "https://sqs.us-east-1.amazonaws.com/214775916492/xtractor_api2_generateImages"
)


def lambda_handler(event, context):
    """
    This function is triggered by SQS and will generate images from a pdf file 
    while also uploading them to S3 and publishing a notification to SNS
    :param: event: dictionary containing userName and file
    :param: context: lambda context (not used)
    """

    #response message
    response = ""

    # acquire the user and file
    userName = event["Records"][0]["body"].split(",")[0]
    file = event["Records"][0]["body"].split(",")[1]
    receiptHandle = event["Records"][0]["receiptHandle"]

    # format of the files is jobID+page#.jpg
    jobID = file.split(".")[0]
    # check if item exists

    try:
        fileToFind = userName + "/" + file
        s3.Object(BUCKET, fileToFind).load()
    except botocore.exceptions.ClientError as e:
        if e.response["Error"]["Code"] == "404":
            response = "File Cannot Be Found"
            return {"statusCode": 404, "body": response}
        else:
            response = e.what()
            return {"statusCode": 404, "body": response}

    temp = "/tmp/" + file
    s3Client.download_file("xtractor-main", fileToFind, temp)

    # Store Pdf with convert_from_path function
    images = convert_from_path(temp)

    for i in range(len(images)):
        # Save pages as images in the pdf
        fullFileName = jobID + "page" + str(i) + ".jpg"
        generatedFile = "/tmp/" + fullFileName
        images[i].save(generatedFile, "JPEG")

        # upload back to S3
        s3Client.upload_file(generatedFile, BUCKET, userName + "/" + fullFileName)

    # lastly delete from queue
    response = sqs.delete_message(QueueUrl=QUEUE_URL, ReceiptHandle=receiptHandle)
    print("SQS")
    print(response)

    # publish successful upload to SNS
    numPages = (len(images))
    message = {
        "jobID": jobID,
        "userName": userName,
        "file": file,
        "num pages": numPages
    }
    response = sns.publish(
        TargetArn=ARN,
        Message=json.dumps({"default": json.dumps(message)}),
        MessageStructure="json",
    )
    print("SNS")
    print(response)


# if __name__ == "__main__":
#     testDictionary = {"userName": "johndoe", "file": "invite.pdf"}
#     lambda_handler(testDictionary, None)
