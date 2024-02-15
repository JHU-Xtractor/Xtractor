import boto3
import json
import PyPDF2
import os

BUCKET = "xtractor-main"
QUEUE_URL = "https://sqs.us-east-1.amazonaws.com/214775916492/xtractor_process_table.fifo"
TEMP_DIR = "/tmp"

def downloadFromS3(file):
    """
    This function downloads a file from S3
    :param file: the file to be downloaded
    """

    try:
        # S3 client
        s3 = boto3.client('s3')

        outputfile = TEMP_DIR + "/" + file.split("/")[-1]
        
        # Download the file
        s3.download_file(BUCKET, file, outputfile)
        
        # Return the file path
        return outputfile

    except Exception as e:
        # Print the exception
        print(e)
        
        # Return None
        return None
    
def sendToSQS(message):
    """
    This function sends a message to the SQS queue
    :param message: the message to be sent
    """
    # SQS client
    sqs = boto3.client('sqs')
    
    # Send the message
    sqs.send_message(
        QueueUrl=QUEUE_URL,
        MessageBody=message,
        MessageGroupId="Xtractor",
        MessageDeduplicationId=message
    )

    
def uploadToS3(file, bucket, objectName):
    """
    This function uploads a file to S3
    :param file: the file to be uploaded
    :param bucket: the bucket to which the file is to be uploaded
    :param objectName: the object name
    """
    try:
        # S3 client
        s3 = boto3.client('s3')
        
        print("uploading to s3: " + file)

        # Upload the file
        s3.upload_file(file, bucket, objectName)
        
    except Exception as e:
        # Print the exception
        print(e)

def concatUniquePages(listOfPages,file_path):
    pdf_file = open(file_path, 'rb')
    pdf_reader = PyPDF2.PdfReader(pdf_file)

    pdf_writer = PyPDF2.PdfWriter()
    for i in listOfPages:
        pdf_writer.add_page(pdf_reader.pages[i])

    output_filename = file_path.replace(".pdf", "_unique.pdf")

    with open(output_filename, 'wb') as output_pdf:
        pdf_writer.write(output_pdf)

    pdf_file.close()

    return output_filename
    
def split_pdf(file_path, output_path,userName):

    pdf_file = PyPDF2.PdfReader(file_path)

    for i in range(0, len(pdf_file.pages), 2):
        pdf_writer = PyPDF2.PdfWriter()
        for j in range(i, min(i + 2, len(pdf_file.pages))):
            pdf_writer.add_page(pdf_file.pages[j])

        output_filename = f"{output_path}/output_{i//2+1}.pdf"

        print(output_filename)

        with open(output_filename, 'wb') as output_pdf:
            pdf_writer.write(output_pdf)
        
        # # upload to s3
        s3_output = userName + output_filename.replace(output_path , "")
        uploadToS3(output_filename, BUCKET, s3_output)

        # # Send to SQS The finished file
        sendToSQS(output_filename.replace(TEMP_DIR + "/", ""))

def lambda_handler(event,context):
    """
    This function is the entry point for the AWS Lambda function.
    :param event: the event that triggered the function
    :param context: the context in which the function is running
    """

    # Get the file from api gateway
    # file = json.loads(event['body'])['file']
    # listOfPages = json.loads(event['body'])['listOfPages']
    # listOfPages = list(map(int, listOfPages))

    file = "jyoun127/702825010004.pdf"
    listOfPages = [0,1,2,3]

    ########### STEP 1 : Download the file from S3 ###########

    # Download the file from S3
    filePath = downloadFromS3(file)

    # If the file path is None
    if filePath is None:
        # Return None
        return None
    
    ########### STEP 2: Get all the pdf pages together ###########

    outFileName = concatUniquePages(listOfPages,filePath)

    ########### STEP 3: Partition the PDF into batches of two pages ###########

    # Open the file
    tmpFile = TEMP_DIR 
    userName = file.split("/")[0]
    split_pdf(outFileName, tmpFile,userName)

    print("Process Finished")


if __name__ == "__main__":
    
    # Test that concat unique pages works
    file_path = "702825010010.pdf"
    pages = [0,1,2,3,4,5]
    concatUniquePages(pages,file_path)

    # Separate into batches tests
    file_path = "702825010010_unique.pdf"
    output_path = "./tmp"
    split_pdf(file_path, output_path)
