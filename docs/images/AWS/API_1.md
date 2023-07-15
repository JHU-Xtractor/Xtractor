# API_1 Docs

API_1 is the API endpoint for AWS for this project. 

Current Version: 1.0.0\
Most Recent Publishing Date: 7/15/23

## Functions
### Retrieiving Files from S3 
Sourcefile: `src\back\aws\api_1\retrieveFileS3.py` - this is a lambda function and exists on AWS. 

In order to retrieve files from S3, a presigned URL is retrieved for the file. This URL is then used to download the file from S3. Please note, the presigned URL has a limit of 1000 milliseconds (or 1 second) before it is expired. You must generate a new URL once the previous one has expired.

#### Usage

`https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v1/api_1/{bucketName}?file={file_path}`

Example:\
`https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v1/api_1/xtractor-test-bucket?file=sample_results/1960-Aguascaliente2.csv`

Where\
`file_path`: `sample_results/1960-Aguascaliente2.csv`\
`bucketName`:  `xtractor-test-bucket`.

#### Testing
1. First use POSTMAN or other API testing tool to generate a presigned URL.
2. Use the presigned URL to download the file from S3 (e.g. putting that in your browser will download the file).

#### Responses

`200` - Success:\
message body: `{presigned_url}`

`400` - Bad Request:\
message body: `{error_message}`

`500` - Internal Server Error:\
message body: `{error_message}`