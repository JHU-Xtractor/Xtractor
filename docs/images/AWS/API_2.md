# API_2

---

### Description:

API_2 is the REST API for Xtractor as of 7/21/2023. It contains full implementations for functionalities. There are certain functionalities that have not been implemented, and thus one should consider using API_1 for testing. 

# REST API Gateways

## `usermangement/create_user`

### **********************Description**********************:

This gateway creates a user in the DynamoDB database as well as provisions a folder in S3 for a user to use. 

### ********************************************Entries into Database:********************************************

All are required, `username` serves as key

| Field | Type | Description  |
| --- | --- | --- |
| Username  | String | The username of the user, cannot be duplicated |
| Name  | Map | {’first_name’: <sample>,’lastname’<sample>} |
| Email | String | email of the user |
| Security | Map | {’security_question`:<sample>,`security_answer`:<sample>,’password’:pa<sample>} |

### **********************************S3 Configuration**********************************

All files for this user must reside in the `xtractor_main` bucket, which each user being represented as a folder eg `xtractor_main/john_doe` . Within these folders, the files are there for a whole host of uses. 

### **********Usage**********

This is a `POST` event, with the API url being:

 [`https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2//api_2/user_management/create_user`](https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2//api_2/user_management/create_user)

and the message body being:

```jsx
{"username":"USERNAME","name":{"first_name": "FIRSTNAME","last_name":"LASTNAME"},\
"[email":"](mailto:email%22:%22johnsmith@gmail.com)EMAIL","security":{"security_question":"SECURITY QUESTION","security_answer":\
"SECURITY ANSWER","password":"PASSWORD"}}
```

### Responses and Considerations

Please validate all fields prior to sending them to DynamoDB. You do not need to check if a user has already been created with that username, as the database will do so automatically. Moreover, if you fail to include all fields in dictionary above, the response will throw an error exception. 

The POST event should have the message body as a dictionary, not string, e.g. do not encapsulate the dictionary in quotes. The dictionary should be sent as a raw body (see POSTMAN for examples)

********200:********

- `Username Already Exists` - signifies that the username attempted to be entered is already in the database and cannot be repeated
- `"User Successfully Inputted into Database\nObject Successfully Inserted into S3\n"` - signifies that both the folder and the database has the user inputted
- `"<FIELD>"` - signifies that the field is missing.

********503:********

- `"missing authentication token"`  - implies that your request is malformed
- `"internal server error"` - indicates that either the API gateway or lambda function has malfunctioned, see cloudwatch for debugging information.