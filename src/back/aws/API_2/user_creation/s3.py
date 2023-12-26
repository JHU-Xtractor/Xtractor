import boto3


class S3Manager: 

    def __init__(self):
        self.s3 = boto3.client('s3')

    def generatePresignedURLForUploads(self, bucketName: str, objectName: str, expiration: int = 3600):
        """
        Generates a presigned URL for uploads to S3.
        """
        return self.s3.generate_presigned_url(
            ClientMethod='put_object',
            Params={
                'Bucket': bucketName,
                'Key': objectName
            },
            ExpiresIn=expiration
        )
    
    def generatePresignedURLForDownloads(self, bucketName: str, objectName: str, expiration: int = 3600):
        """
        Generates a presigned URL for downloads from S3.
        """
        return self.s3.generate_presigned_url(
            ClientMethod='get_object',
            Params={
                'Bucket': bucketName,
                'Key': objectName
            },
            ExpiresIn=expiration
        )
    
    def createFolder(self, bucketName: str, folderName: str):
        """
        Creates a folder in S3.
        """
        try:
            response = self.s3.put_object(Bucket=bucketName, Key=(folderName+'/'))
        except:
            return 400, "Error Creating Folder: " + str(response)
        return 200, "Folder created."

    def uploadFile(self, bucketName: str, fileName: str, fileData: str):
        """
        Uploads a file to S3.
        """
        try:
            response = self.s3.put_object(Bucket=bucketName, Key=fileName, Body=fileData)
        except:
            return 400, "Error Uploading File: " + str(response)
        return 200, "File uploaded."

    def deleteFolder(self, bucketName: str, folderName: str):
        """
        Deletes a folder in S3.
        """
        try:
            self.s3.delete_object(Bucket=bucketName, Key=(folderName+'/'))
        except:
            return 400, "Folder does not exist."
        return 200, "Folder deleted."

    def deleteFile(self, bucketName: str, fileName: str):
        """
        Deletes a file in S3.
        """
        try:
            self.s3.delete_object(Bucket=bucketName, Key=fileName)
        except:
            return 400, "File does not exist."
        return 200, "File deleted."

    def listFiles(self, bucketName: str, folderName: str):
        """
        Lists all files in a folder in S3.
        """
        try:
            return 200, str(self.s3.list_objects(Bucket=bucketName, Prefix=folderName, Delimiter='/'))
        except:
            return 400, "Folder does not exist."
    
    def listFolders(self, bucketName: str, folderName: str):
        """
        Lists all folders in a folder in S3.
        """
        try:
            return 200, str(self.s3.list_objects(Bucket=bucketName, Prefix=folderName, Delimiter='/'))
        except:
            return 400, "Folder does not exist."
    

if __name__ == '__main__':
    test_bucket = "xtractor-main"
    test_folder = "test"

    s3 = S3Manager()
    s3.createFolder(test_bucket, test_folder)
    
