import boto3
import textractCsv
import authenticator as auth
import json
import ast

DEFAULT_ORIGIN = "*"

def lambda_handler(event, context):


    #################### AUTHENTICATION ####################
    authClient = None
    try:
        authClient = auth.Authenticator(event["headers"]["origin"])
    except KeyError:
        authClient = auth.Authenticator(DEFAULT_ORIGIN)

    #################### VALIDATING INPUT ###################

    if event["queryStringParameters"] is None:
        return authClient.getResponse(json.dumps({"error": "No query string parameters"}), 400)
    
    if "files" not in event["queryStringParameters"]:
        return authClient.getResponse(json.dumps({"error": "Missing required query string parameters"}), 400)

    #################### CREATING FILES ####################

    queryContent = event["queryStringParameters"]["files"]

    print(queryContent)

    files = ast.literal_eval(queryContent)
    

    responseDictionary = {}
    responseDictionary["listOfCSVFiles"] = []
    responseDictionary["listOfFileContents"] = []

    for file in files:
        print(file)
        try:
            fileObj = textractCsv.TableGenerator(file)
            outFile,fileContent = fileObj.convertToCSV()
            responseDictionary["listOfCSVFiles"].append(outFile)
            responseDictionary["listOfFileContents"].append(fileContent)
        except Exception as e:
            return authClient.getResponse(json.dumps({"error": "Error generating CSV", "message": str(e)}), 400)

    
    #################### RETURN PROCESSED ###################
    return authClient.getResponse(json.dumps({"files": responseDictionary}), 200)



if __name__ == "__main__":
    event = {
        "queryStringParameters": {
            "files": ["kathyli/14324124/14324124page3.jpg"]
        },
        "headers": {
            "origin": "http://localhost:3000"
        }
    }
    print(lambda_handler(event, None))