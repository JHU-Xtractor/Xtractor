# PDF To Image Architecture

---

### Description

The purpose of this document is to detail how images are created from a pdf.

## 1. Upload PDF

**`/fileManagement/{bucket}/{file}`**  must be utilized to upload a file to S3. Specifically this uploads a file to `xtractor-main`

### a. **`xtractor_api2util_moveToFolder`**

This lambda function is triggered by a new file in `xtractor-main` . 

This lambda function then moves the pdf to its own folder e.g. `file_job/file_job.pdf` . This is to ensure that all the images generated are in once place for a given pdf folder. The format of the file read in should be `username_jobname.pdf` . Note that the `_` is important in order to distinguish the two. Please see `API2` for more information. 

The lambda function is then triggered again because the pdf is moved to it’s own folder. The lambda function will recognize this because the job name is all that exists in the pdf. This time, however, the lambda function will post a job onto SQS - **`xtractor_api2_generateImages`**

## 2. **`xtractor_api2util_generateImages`**

This lambda function is triggered by a new job on the SQS queue as mentioned before. 

The lambda function then grabs information about the job, and proceeds to process it. Note that this lambda function is a container, original code can be found on github repo. 

Once the lambda function is done processing everything, it will write the images to S3 in the form of `job_name<#page number>.jpg` e.g. if you have a pdf of 5 pages, 5 `jpg` images will be produced. 

Once the images have been finished processing, the images are then posted onto SNS. Please subscribe to SNS to receive updates of what is finished. 

### a. Considerations

The queue has a **read protected time**, in which only one entity can read a message before it is accessible by others. This value may need to be adjusted if the lambda function is unnecessarily generating more than one job response. 

Lambda function has limitation on **how much local storage** they can have. This value may need to be adjusted if pdf file sizes are excessively large.