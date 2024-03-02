import boto3


class DynamoDB:

    def __init__(self, tableName: str):
        self.dynamodb = boto3.resource('dynamodb')
        self.table = self.dynamodb.Table(tableName)

    def purgeTable(self, primaryKey: str):
        """
        This function purges the table
        """
        scan = self.table.scan()
        with self.table.batch_writer() as batch:
            for each in scan['Items']:
                batch.delete_item(
                    Key={
                        primaryKey: each[primaryKey]
                    }
                )

if __name__ == "__main__":

    lookup_table = "Xtractor_job_file_lookup"
    uuid_table = "xtractor_api_3_lookup_file_uuid"
    
    lookup = DynamoDB(lookup_table)
    uuid = DynamoDB(uuid_table)

    uuid_primaryKey = "uuid"
    lookup_primaryKey = "job_id"

    lookup.purgeTable(lookup_primaryKey)
    uuid.purgeTable(uuid_primaryKey)

    print("Tables purged successfully!")