import requests
import json

class URL:

    def __init__(self, url):
        self.url = url

    def get(self, body):
        return requests.get(self.url, body)
    
    def post(self, params:dict):

        paramsURL = None
        for key in params:
            if paramsURL == None:
                paramsURL = key + "=" + params[key]
            else:
                paramsURL = paramsURL + "&" + key + "=" + params[key]
        
        return requests.post(self.url + "?" + paramsURL)

def testFetchJobStatus(urlObj):

    parameters =  {
        'fileUUID': '2086dd8c-18d9-490e-8b01-a226af037b1e'
    }

    response = urlObj.get(parameters)

    if response.status_code not in [200, 201]:
        print(response.text)

    assert response.status_code == 200

    return response


if __name__ == "__main__":
    url = "https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v3/api_2/job-management"
    urlObj = URL(url)
    response = testFetchJobStatus(urlObj)

    prettyPrint = json.dumps(json.loads(response.text), indent=4)
    print(prettyPrint)