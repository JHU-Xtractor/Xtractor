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

    def updateFirstName(self,username,first_name):
        """
        This function will update the first name of the user
        :param: username: username to update
        :param: first_name: first name to update
        """
        try:
            # updating the item
            self.table.update_item(
                Key={
                    'username': username
                },
                UpdateExpression="set first_name = :f",
                ExpressionAttributeValues={
                    ':f': first_name
                },
                ReturnValues="UPDATED_NEW"
            )
            return True
        except Exception as e:
            # in case something goes wrong
            print(e)
        return False
    
    def updateLastName(self,username,last_name):
        """
        This function will update the last name of the user
        :param: username: username to update
        :param: last_name: last name to update
        """
        try:
            # updating the item
            self.table.update_item(
                Key={
                    'username': username
                },
                UpdateExpression="set last_name = :l",
                ExpressionAttributeValues={
                    ':l': last_name
                },
                ReturnValues="UPDATED_NEW"
            )
            return True
        except Exception as e:
            # in case something goes wrong
            print(e)
        return False