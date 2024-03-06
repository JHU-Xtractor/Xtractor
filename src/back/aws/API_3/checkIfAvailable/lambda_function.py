import boto3
import json
DYANMO_DB_TABLE_FILE = 'Xtractor_job_file_lookup'
DYNAMO_DB_TABLE_UUID = "xtractor_api_3_lookup_file_uuid"

dynamoDB = boto3.client('dynamodb')

def getJobIDS(fileUUID: str) -> dict:
    """
    Get the job_ids from the DynamoDB table
    :parma fileUUID: The fileUUID to get the job_ids for
    """
    response = dynamoDB.get_item(
        TableName=DYNAMO_DB_TABLE_UUID,
        Key={
            'uuid': {
                'S': fileUUID
            }
        }
    )
    
    # get the job_ids
    job_ids = response['Item']['job_ids']["L"]
    return job_ids

def getJobStatuses(job_ids: list) -> dict:
    """
    Get the job status for each job_id
    :param job_ids: The list of job_ids to get the status for
    """

    # Get the job status for each job_id
    job_statuses = {}
    counter = 0
    for job_dict in job_ids:
        job_id = job_dict['S']
        jobResponse = getJobStatus(job_id)

        # get the job status
        job_status = jobResponse['Item']['status']['S']

        if job_status == "COMPLETED":
            job_statuses[job_id] = "COMPLETED"

        else: 
            job_statuses[job_id] = jobResponse['Item']['file']['S'].split("/")[-1].split(".")[0]
        
        counter = counter + 1

    return job_statuses


def getJobStatus(job_id):
    response = dynamoDB.get_item(
        TableName=DYANMO_DB_TABLE_FILE,
        Key={
            'job_id': {
                'S': job_id
            }
        }
    )
    return response


def lambda_handler(event, context):

    print(event)

    # Get the fileUUID from the event
    fileUUID = (event['queryStringParameters']['fileUUID'])

    # Add the entry to the DynamoDB table
    jobIds = getJobIDS(fileUUID)

    # Get the job statuses
    totalJobReport = {}
    try:
        totalJobReport = getJobStatuses(jobIds)
    except Exception as e:
        print(e)
        return {
            'statusCode': 200,
            'body': json.dumps("NOT STARTED")
        }

    return {
        'statusCode': 200,
        'body': json.dumps(totalJobReport)
    }

if __name__ == "__main__":
    event = {
        'body': {
            'fileUUID': '2086dd8c-18d9-490e-8b01-a226af037b1e'
        }
    }
    context = {}
    response = (lambda_handler(event, context))

    prettyPrint = json.dumps(json.loads(response['body']), indent=4)
    print(prettyPrint)