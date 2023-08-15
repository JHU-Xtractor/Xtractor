# API_2

---

### Description:

API_2 is the REST API for Xtractor as of 7/21/2023. It contains full implementations for functionalities. There are certain functionalities that have not been implemented, and thus one should consider using API_1 for testing. 

# REST API Gateways

## `/fileManagement/{bucket}/{file}`

### Desccription

Uploads a file to the S3 bucket 

### Usage

A `PUT` event utilizing the following API gateway

`https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/file_managment/{bucket}/{file}`

```jsx
https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/...
file_managment/{bucket}/{file}

e.g.
https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/...
file_managment/xtractor-main/cat.JPG

//where {bucket} = xtractor-main
//where {file} - cat.JPG
```

The bucket for all Xtractor related tasks will be `xtractor-main.`

### Acceptable Files Types

- `JPG`
- `PNG`
- `PDF`
- `JPEG`

********200:********

- No fields returned signifies that the file successfully uploaded

**400:**

- `"missing authentication token"`  - implies that your request is malformed
- `"internal server error"` - indicates that either the API gateway or lambda function has malfunctioned, see cloudwatch for debugging information.

---

## `job_management`

### Description

This gateway checks if an existing job ID present within the backend system. This is a `GET` request. 

### Usage

```jsx
"<JOBIID>"

e.g.

"TEST_ITEM"
```

A string containing the JOB ID. Utilize the following URL to utilize the API 

[`https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/job_management`](https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/job_management)

### Returns

The response returns both the HTTPS code as well as the message of the response. 

********200:********

- `Job Already Exists` - signifies that the JOB ID already exists within the Database
- `Job Does not Exist` - signifies the job does not exist within the database.
- `"<FIELD>"` - signifies that the field is missing.

**400:**

- `"missing authentication token"`  - implies that your request is malformed
- `"internal server error"` - indicates that either the API gateway or lambda function has malfunctioned, see cloudwatch for debugging information.

---

## `usermanagement/create_user`

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
"email":"EMAIL","security":{"security_question":"SECURITY QUESTION","security_answer":\
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

---

## `user_management/update_user`

### **********************Description**********************:

The purpose of this function is to modify users in the database. 

### Use Cases:

This is a `POST` operation with the body being a dictionary. The gateway URL can be found below (do not include the `\` character, it only signifies a break in the line):

```jsx
https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/\
user_management/update_user
```

In general, the program will look for the user first to determine if they exists via username. Multiple successes and failures, or a combination of both will be reported if a series of actions are requested, e.g. updating the user’s email and password.

What can and cannot be updated can be found below:

| Parameter | Updateable?  |
| --- | --- |
| Email | Yes |
| Name | No |
| Password | Yes |
| Username | No (key) |
| Security Question & Answer | Yes |

Request formatting can also be found below:

```jsx
{"username": "USERNAME","email": "test@jhu.edu","password": "test","security":
{"security_question":"question","security_answer":"answer"}}
```

Note, not all of the parameters have to be filled out. If the parameter is not filled out, leave out that parameter from the dictionary. 

For instance, if one were only to update email (note the rest of the fields are left out)

```jsx
{"username": "USERNAME","email": "test@jhu.edu"}
```

Username is a required field.

**********Update Email:**********

Updates the email for the given user. The user will be requested to re-verify their email and standard checking of whether or not the email is a `.edu` will also be initiated. 

Success 200: `Email updated`

Failure 400: `Email update failed`

**********************Update Password:**********************

Updates the password for a given user. Checks on the characters and security criterion regarding the password is not checked. Must be checked at the front end. 

Success 200: `Password Updated`

Failure 400: `Password Update Failed`

****************Update Security Question and Answer****************

Security question and answer can be updated for the sake of recovering password or other security functions that require an extra layer. 

Success 200: `Security updated`

Failure 400: `Security` `Update Failed`

---