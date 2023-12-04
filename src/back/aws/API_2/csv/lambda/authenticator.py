

class Authenticator:

    def __init__(self, origin):
        print(origin)
        self.origin = origin
    
    def getResponse(self, body, statuscode):
        return {
            "headers": {
                "Access-Control-Allow-Origin": self.origin,
                "Access-Control-Allow-Credentials": True,
                "Content-Type": "application/json"
            },
            "statusCode": statuscode,
            "body": body
        }
        

