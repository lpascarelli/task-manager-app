# task-manager-app
task-manager-app made with Node.js

# Endpoints

User:

  - POST /users
  - POST /users/login
  - GET /users/me
  - POST /users/logout
  - POST /users/logoutAll
  - PATCH /users/me
  - DELETE /users/me

# Request

```sh
POST /users
```

| Name | Type | Description | Mandatory   |
| ------ | ------ | ------ | ------------ |
| name | string | user name | yes
| email | string | user email | yes
| password | string | user password | yes
| age | numeric | user age | no

```sh
POST /users/login
```

| Name | Type | Description | Mandatory   |
| ------ | ------ | ------ | ------------ |
| name | string | user name | yes
| email | string | user email | yes

```sh
GET /users/me
Authorization: Bearer b64token
```

```sh
POST /users/logout
Authorization: Bearer b64token
```

```sh
POST /users/logoutAll
Authorization: Bearer b64token
```

```sh
PATCH /users/me
Authorization: Bearer b64token
```

| Name | Type | Description | Allowed   |
| ------ | ------ | ------ | ------------ |
| name | string | user name | yes
| email | string | user email | yes
| password | string | user password | yes
| age | numeric | user age | yes

```sh
DELETE /users/me
Authorization: Bearer b64token
```

# Response

```sh
POST /users
```
```sh
Status: 201 Created
{
  "user": {
    "age": 27,
    "_id": "5dfb8ec30fd7176e9805ef56",
    "name": "Luke",
    "email": "luca92@gmail.com",
    "__v": 1
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGZiOGVjMzBmZDcxNzZlOTgwNWVmNTYiLCJpYXQiOjE1NzY3NjcxNzF9.aAIPmOUdw1F7VU1I8MwmgKF4NiTDQ564DSnpuYP1uBg"
}
```

```sh
POST /users/login
```
```sh
Status: 200 OK
{
  "user": {
    "age": 27,
    "_id": "5dfb8ec30fd7176e9805ef56",
    "name": "Luke",
    "email": "luca92@gmail.com",
    "__v": 1
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGZiOGVjMzBmZDcxNzZlOTgwNWVmNTYiLCJpYXQiOjE1NzY3NjcxNzF9.aAIPmOUdw1F7VU1I8MwmgKF4NiTDQ564DSnpuYP1uBg"
}
```

```sh
GET /users/me
```
```sh
Status: 200 OK
{
  "user": {
    "age": 27,
    "_id": "5dfb8ec30fd7176e9805ef56",
    "name": "Luke",
    "email": "luca92@gmail.com",
    "__v": 1
  }
}
```

```sh
POST /users/logout
```
```sh
Status: 200 OK
```

```sh
POST /users/logoutAll
```
```sh
Status: 200 OK
```

```sh
PATCH /users/me
```
```sh
Status: 200 OK
{
  "user": {
    "age": 27,
    "_id": "5dfb8ec30fd7176e9805ef56",
    "name": "Luke",
    "email": "luca92@gmail.com",
    "__v": 1
  }
}
```

```sh
DELETE /users/me
```
```sh
Status: 200 OK
{
  "user": {
    "age": 27,
    "_id": "5dfb8ec30fd7176e9805ef56",
    "name": "Luke",
    "email": "luca92@gmail.com",
    "__v": 1
  }
}
```