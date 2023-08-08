# import module
import os
import boto3
import botocore
from botocore.exceptions import ClientError
from pdf2image import convert_from_path


SUBDIRECTORY = "images/"
BUCKET = "xtractor-main"

s3 = boto3.resource("s3")
s3Client = boto3.client("s3")

QUEUE_URL = 'https://sqs.us-east-1.amazonaws.com/214775916492/xtractor_api2_generateImages'


def lambda_handler(event, context):
    response = ""

    # acquire the user and file
    # TODO - implement the user and the file
    userName = event["Records"][0]["body"].split(",")[0]
    file = event["Records"][0]["body"].split(",")[1]
    receiptHandle = event['Records'][0]['receiptHandle']
    # userName = event["userName"]
    # file = event["file"]

    jobID = file.split(".")[0]
    # check if item exists
    try:
        fileToFind = '/tmp/'+userName + "/" + file
        s3.Object(BUCKET, fileToFind).load()
    except botocore.exceptions.ClientError as e:
        if e.response["Error"]["Code"] == "404":
            response = "File Cannot Be Found"
            return {"statusCode": 404, "body": response}
        else:
            response = e.what()
            return {"statusCode": 404, "body": response}

    s3Client.download_file("xtractor-main", fileToFind, file)

    # Store Pdf with convert_from_path function
    images = convert_from_path(file)
    foldername = SUBDIRECTORY

    # check if the directory for the file exists
    if not os.path.exists(foldername):
        os.makedirs(foldername)

    listOfSigned_URL = {}

    print(len(images))

    for i in range(len(images)):
        # Save pages as images in the pdf
        fullFileName = jobID + "page" + str(i) + ".jpg"
        generatedFile = foldername + fullFileName
        images[i].save(generatedFile, "JPEG")
        # local file, s3 file
        userFile = userName + generatedFile
        print(userName)
        print(fullFileName)

        s3Client.upload_file(generatedFile, BUCKET, userName + "/" + fullFileName)
        # preSignedGenerated = getPresignedURL(userFile)
        # listOfSigned_URL["page" + str(i)] = preSignedGenerated

    # return {"statusCode": 200, "body": str(listOfSigned_URL)}

    # lastly delete from queue
    response = s3Client.delete_message(QueueURL=QUEUE_URL, ReceiptHandle=receiptHandle)


def getPresignedURL(file_name):
    method_parameters = {"Bucket": BUCKET, "Key": file_name}

    url = "Failed to generated presigned URL"
    try:
        # generate presigned url
        url = s3.generate_presigned_url(
            ClientMethod="get_object", Params=method_parameters, ExpiresIn=5000
        )
        messageBody = "url: " + url
        # return response
        return {"statusCode": 200, "body": messageBody}
    except ClientError:
        print("Couldn't get a presigned URL for client method '%s'.", "get-object")
        return {"statusCode": 400, "body": url}


# if __name__ == "__main__":
#     testDictionary = {"userName": "johndoe", "file": "invite.pdf"}
#     lambda_handler(testDictionary, None)
