import requests
import json

class URL:

    def __init__(self, url):
        self.url = url

    def get(self, body):
        return requests.get(self.url, body)
    
    def post(self, body):
        return requests.post(self.url, body)
    

def testPDF(urlObj):

    body = {
        "file": "jyoun127/example.pdf",
        "listOfPages": [1,2,3]
    }

    response = urlObj.post(json.dumps(body))

    if response.status_code not in [200, 201]:
        print(response.text)

    assert response.status_code == 200

def testPNG(urlObj):

    body = {
        "file": "jyoun127/test.png"
    }

    response = urlObj.post(json.dumps(body))

    if response.status_code not in [200, 201]:
        print(response.text)

    assert response.status_code == 200

def testFileDoesNotExist(urlObj):
    body = {
        "file": "jyoun127/doesnotexist.png"
    }

    response = urlObj.post(json.dumps(body))

    if response.status_code not in [500]:
        print(response.text)

    assert response.status_code == 500

if __name__ == "__main__":
    url = "https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v3/api_2/job-management"
    urlObj = URL(url)
    testPDF(urlObj)
    # testPNG(urlObj)
    # testFileDoesNotExist(urlObj)

    print("All tests passed")