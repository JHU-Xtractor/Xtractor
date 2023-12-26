
import boto3
import cv2 as cv
import json_generator as jg
import json

BUCKET = "xtractor-test-bucket"

def startTextractJob(bucket:str, documentName:str)-> dict:
    """
    This function starts a Textract job
    :param bucket: the bucket where the document is stored
    :param documentName: the name of the document
    """
    print('Starting Textract job')
    client = boto3.client('textract')
    response = client.analyze_document(
        Document={
            'S3Object': {
                'Bucket': bucket,
                'Name': documentName
            }
        },
        FeatureTypes=["TABLES"]
    )
    return response

def uploadToS3(file:str, bucket:str, name:str):
    """
    This function uploads a file to S3
    :param file: the file to be uploaded
    :param bucket: the bucket to upload to
    """
    s3 = boto3.resource('s3')
    s3.Bucket(bucket).put_object(Key=name, Body=file)

if __name__ == "__main__":
    #######################################################################
    # PART 1: Starting the Textract job
    #######################################################################

    # Upload file to S3
    uploadToS3(open("Sample_Image.JPG", "rb"), BUCKET, "Sample_Image.JPG")

    # Start Textract job
    response = startTextractJob(BUCKET, "Sample_Image.JPG")
    
    # write the textract job
    with open("analyzeDocresponse.json", "w") as f:
        f.write(json.dumps(response))
    
    #######################################################################
    # PART 2: Getting the table into the correct format
    #######################################################################

    # get the dimensions of the image
    image = cv.imread("Sample_Image.JPG")
    height, width, channels = image.shape

    # then run the json converter
    jg.mainSequence("analyzeDocresponse.json", width, height)

