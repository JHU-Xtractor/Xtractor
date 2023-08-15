class UserEntry:

    def __init__(self,dyn_resource):
        self.dynamodb = dyn_resource
        self.table = self.dynamodb.Table('xtractor_users')
    
    def checkIfUserExists(self,username):
        try:
            # getting the item
            response = self.table.get_item(
                Key={
                    'username': username
                }
            )
            if response['Item'] != None:
                return True
        except Exception as e:
            # in case something goes wrong
            print(e)
        return False
    
    def updateEmail(self,username,email):
        try:
            # updating the item
            self.table.update_item(
                Key={
                    'username': username
                },
                UpdateExpression="set email = :e",
                ExpressionAttributeValues={
                    ':e': email
                },
                ReturnValues="UPDATED_NEW"
            )

            self.table.update_item(
                Key={
                    'username': username
                },
                UpdateExpression="set email_verified = :e",
                ExpressionAttributeValues={
                    ':e': False
                },
                ReturnValues="UPDATED_NEW"
            )
            return True
        except Exception as e:
            # in case something goes wrong
            print(e)
        return False

    def updatePassword(self,username,password):
        try:
            # updating the item
            self.table.update_item(
                Key={
                    'username': username
                },
                UpdateExpression="set password = :p",
                ExpressionAttributeValues={
                    ':p': password
                },
                ReturnValues="UPDATED_NEW"
            )
            return True
        except Exception as e:
            # in case something goes wrong
            print(e)
        return False
    
    def updateSecurityQuestion(self,username,security_question):
        try:
            # updating the item
            self.table.update_item(
                Key={
                    'username': username
                },
                UpdateExpression="set security_question = :s",
                ExpressionAttributeValues={
                    ':s': security_question
                },
                ReturnValues="UPDATED_NEW"
            )
            return True
        except Exception as e:
            # in case something goes wrong
            print(e)
        return False
    
    def updateSecurityAnswer(self,username,security_answer):
        try:
            # updating the item
            self.table.update_item(
                Key={
                    'username': username
                },
                UpdateExpression="set security_answer = :s",
                ExpressionAttributeValues={
                    ':s': security_answer
                },
                ReturnValues="UPDATED_NEW"
            )
            return True
        except Exception as e:
            # in case something goes wrong
            print(e)
        return False