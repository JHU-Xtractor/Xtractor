# API_2

---

Version v2 | 9/16/23 | Authored by Jonathan Young - jyoun127

### Format

The API is divided by the following 

**************Name -************** On AWS API Gateway, the API is listed as `xtractor_aws`

**Resources** - a collection of API’s that govern a particular use case

---

# Authorization

All API calls **MUST** use an `identity-token` from the cognito user pool: `xtractor_users`

The API call in the `header` section must contain the key `Authorization` alongside the token

# APIs:

## Resource: `file_Management`

This resource relates to all functionalities involving file management. 

### API: `file_Management/{bucket}/{file}`

**************************Description:************************** This API call uploads a file 

********************Type: `PUT`**

**************************Gateway URL:************************** `https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/file_managment/{bucket}/{file}`

************Fields (URL)************

| Field | Descriptor | Required? |
| --- | --- | --- |
| bucket | the bucket to upload to 

Note: most operations will upload to xtractor-main | Y |
| file | the name of the file

Note: do not put special characters. Underscores and dashes are acceptable | Y |

************************Acceptable File Types************************

- `JPG`
- `PNG`
- `PDF`
- `JPEG`

**********************************Example Use Case:**********************************

```jsx
https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/...
file_managment/{bucket}/{file}

e.g.
https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/...
file_managment/xtractor-main/cat.JPG

//where {bucket} = xtractor-main
//where {file} - cat.JPG
```

****************Returns**************** 

| Return Code | Description |
| --- | --- |
| 200 | File is successfully uploaded |
| 401 | Unauthorized |

## Resource: `job_Management`

This resource relates to all functionalities involving job management. 

### API: `job_management`

**************************Description:************************** This API checks if an existing Job ID is present within the database. Note that all jobs have to be unique across all users. 

************A job is defined as a task to process a file************

********************Type:******************** `GET`

**************************Gateway URL:************************** [`https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/job_management`](https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/job_management)

************Fields (body)************

| Field | Descriptor | Required? |
| --- | --- | --- |
| job_id | a string of the job_id to request | Y |

**********************************Example Use Case:**********************************

```jsx
{"job_id":"adfadfa"}
```

****************Returns**************** 

| Return Code | Description |
| --- | --- |
| 200 | Job exists or does not exist |
| 400 | Malformed Input |
| 401 | Unauthorized |

## Resource: `user_Management`

This resource relates to all functionalities involving user management. 

### API: `user_management/create_user`

**************************Description:************************** This API call creates a user. NOTE: the username must match exactly the cognito username

********************Type: `POST`**

**************************Gateway URL:**************************  [`https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2//api_2/user_management/create_user`](https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2//api_2/user_management/create_user)

************Fields (body)************

| Field | Description  |
| --- | --- |
| Username  | The username of the user, cannot be duplicated |
| Name  | {’first_name’: <sample>,’lastname’<sample>} |

**********************************Example Use Case:**********************************

```jsx
{"username":"kathyli","name":{"first_name": "Kathy","last_name":"Li"},"email":"kathy@jhu.edu"}
```

****************Returns**************** 

| Return Code | Description |
| --- | --- |
| 200 | User is put in  |
| 400 | Malformed Syntax |
| 401 | Unauthorized |

### API: `user_management/update_user`

**************************Description:************************** This API updates the fields of a user within the database. 

********************Type: `POST`**

**************************Gateway URL:************************** https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/user_management/update_user

************Fields (body)************

| Field | Descriptor  |
| --- | --- |
| Email | Update Email |
| first_name | Update first name |
| last_name | update last name |

**********************************Example Use Case:**********************************

```jsx
{"username":"kathyli","first_name":"doctor","last_name":"fish","email": "fish@fish.edu"}
```

****************Returns**************** 

| Return Code | Description |
| --- | --- |
| 200 | User changed (will detail what got changed) |
| 400 | Malformed Input |
| 401 | Unauthorized |

### API: `user_management/delete_user`

**************************Description:************************** This API updates the fields of a user within the database. 

********************Type: `DELETE`**

**************************Gateway URL:************************** https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/user_management/delete_user

************Fields (body)************

| Field | Descriptor  |
| --- | --- |
| username | username to delete |
| password | password of the user to delete |

**********************************Example Use Case:**********************************

```jsx
{
        'username': 'pualJones2',
        'password': '72]0Y\'5~T?b]'
}
```

****************Returns**************** 

| Return Code | Description |
| --- | --- |
| 200 | User deleted |
| 400 | Or user does not exist/Key error |
| 401 | Unauthorized |