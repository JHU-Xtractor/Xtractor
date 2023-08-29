class UserEntry:

    def __init__(self,dyn_resource):
        """
        This function will initialize the user entry object ( a class representation of a user)
        :param: dyn_resource: dynamoDB resource
        """

        # initialize the dynamoDB resource and table
        self.dynamodb = dyn_resource
        self.table = self.dynamodb.Table('xtractor_users')
    
    def checkIfUserExists(self,username):
        """
        This function will check if the user exists in the database
        :param: username: username to check
        """
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
        """
        This function will update the email of the user
        :param: username: username to update
        :param: email: email to update
        """
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
        """
        This function will update the password of the user
        :param: username: username to update
        :param: password: password to update
        """
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
        """
        This function will update the security question of the user
        :param: username: username to update
        :param: security_question: security question to update
        """
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
        """
        This function will update the security answer of the user
        :param: username: username to update
        :param: security_answer: security answer to update
        """
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