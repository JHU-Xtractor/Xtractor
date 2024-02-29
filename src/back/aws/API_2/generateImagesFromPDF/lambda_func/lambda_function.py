import boto3
import botocore
s3 = boto3.resource("s3")

BUCKET = "xtractor-main"
from pdf2image import convert_from_path

def lambda_handler(event, context):
    """
    This function is triggered by an S3 event for a new file
    """

    print(event)

    # get file name from sns
    file = event['Records'][0]["Sns"]["Message"]

    # Check if its an output 
    if "output_" in file:
        print("File is Ignored")
        return

    # get the user name
    userName = file.split("/")[0]

    # the actual file name
    pdfFile = file.split("/")[1]

    # check if the file actually exists
    try:
        s3.Object(BUCKET, file).load()
        print("file downloaded")
    except botocore.exceptions.ClientError as e:
        print("failed to find file " + str(e))

    # download the file
    temp = "/tmp/" + pdfFile
    s3.Bucket(BUCKET).download_file(file, temp)

    # convert the pdf to images
    pages = convert_from_path(temp)
    print("pages " + str(pages))

    for i in range(len(pages)):

        # save the images
        fullFileName = pdfFile.split(".")[0] + "page" + str(i) + ".jpg"

        generatedFile = "/tmp/" + fullFileName

        pages[i].save(generatedFile, "JPEG")

        # upload the images
        s3.Bucket(BUCKET).upload_file(generatedFile, userName + "/" + pdfFile.split(".")[0] + "/" + fullFileName)

    print("Task Complete")

if __name__ == '__main__':
    ###########################
    # Testing 
    ###########################
    event = {"Records": [{"s3": {"object": {"key": "kathyli/sample_file.pdf"}}}]}
    lambda_handler(event, None)