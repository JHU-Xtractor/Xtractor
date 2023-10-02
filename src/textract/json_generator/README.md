# Textract `json` Formatter
### Description
This program converts a textract result into a format specified for Xtractor

### Requirements
- **AWS Programmatic Access** through CLI or SDK. Please inquire for access key and secret key from administrator if you do not have one. Use the following command to configure your AWS CLI
```bash
aws configure
```
- **Python 3.6+** installed on your machine
- **boto3** installed on your machine
- **openCv** installed on your machine
- **AWS CLI** installed on your machine

### File Listing
- **json_generator.py** - Helper program that converts textract result into a format specified for Xtractor
- **main.py** - Main program that runs the json_generator.py, and automatically uploads the image/pdf to s3, and downloads the textract result from s3 for processing. 
- **README.md** - This file
