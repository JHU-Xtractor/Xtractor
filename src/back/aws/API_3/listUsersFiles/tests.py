import requests
import json

class URL:

    def __init__(self, url):
        self.url = url

    def get(self, body):
        paramsURL = None
        for key in body:
            if paramsURL == None:
                paramsURL = key + "=" + body[key]
            else:
                paramsURL = paramsURL + "&" + key + "=" + body[key]
        
        print("hello" , self.url + "?" + paramsURL)

        return requests.get(self.url + "?" + paramsURL)
    
    def post(self, params:dict):

        paramsURL = None
        for key in params:
            if paramsURL == None:
                paramsURL = key + "=" + params[key]
            else:
                paramsURL = paramsURL + "&" + key + "=" + params[key]
        

        return requests.post(self.url + "?" + paramsURL)
    
def testTestUserFiles(urlObj):

    parameters =  {
        "user": "jyoun127"
    }

    urlObj.get(parameters)

    response = urlObj.get(parameters)

    if response.status_code not in [200, 201]:
        print(response.text)

    assert response.status_code == 200

    return response

if __name__ == "__main__":
    url = "https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v3/api_2/list-files"
    urlObj = URL(url)
    response = testTestUserFiles(urlObj)

    prettyPrint = json.dumps(json.loads(response.text), indent=4)
    print(prettyPrint)