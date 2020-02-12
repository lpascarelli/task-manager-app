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

Task

  - POST /tasks
  - GET /tasks
  - GET /tasks/:id
  - PATCH /tasks/:id
  - DELETE /tasks/:id

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

| Name | Type | Description | Mandatory   |
| ------ | ------ | ------ | ------------ |
| name | string | user name | yes
| email | string | user email | yes
| password | string | user password | yes
| age | numeric | user age | yes

```sh
POST /tasks
Authorization: Bearer b64token
```

| Name | Type | Description | Mandatory   |
| ------ | ------ | ------ | ------------ |
| description | string | task description | yes
| completed | boolean | task completed | no

```sh
GET /tasks
Authorization: Bearer b64token
```

| Name | Type | Description | Mandatory   |
| ------ | ------ | ------ | ------------ |
| sortBy | string | sorting tasks | no
| completed | string | task completed | no

```sh
GET /tasks/:id
Authorization: Bearer b64token
```

| Name | Type | Description | Mandatory   |
| ------ | ------ | ------ | ------------ |
| id | string | task id | yes


```sh
PATCH /tasks/:id
Authorization: Bearer b64token
```

| Name | Type | Description | Mandatory   |
| ------ | ------ | ------ | ------------ |
| description | string | task description | no
| completed | boolean | task completed | no

```sh
DELETE /tasks/:id
Authorization: Bearer b64token
```

| Name | Type | Description | Mandatory   |
| ------ | ------ | ------ | ------------ |
| id | string | task id | yes

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
    "name": "Hilososo",
    "email": "mimimi.crack@gmail.com",
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

```sh
POST /tasks
```
```sh
Status: 201 Created
{
  "completed": false,
  "_id": "5e4413ad4178df380c726238",
  "description": "This is an example task",
  "owner": "5dfd2083c08fac0dc4b767ba",
  "createdAt": "2020-02-12T15:03:09.280Z",
  "updatedAt": "2020-02-12T15:03:09.280Z",
  "__v": 0
}
```

```sh
GET /tasks
```
```sh
Status: 200 OK
[
  {
    "completed": true,
    "_id": "5dfd20c4c08fac0dc4b767be",
    "description": "True decisions",
    "owner": "5dfd2083c08fac0dc4b767ba",
    "createdAt": "2019-12-20T19:28:04.453Z",
    "updatedAt": "2019-12-20T19:28:04.453Z",
    "__v": 0
  },
  {
    "completed": false,
    "_id": "5e00cfec51401658dce4328f",
    "description": "False decisions",
    "owner": "5dfd2083c08fac0dc4b767ba",
    "createdAt": "2019-12-23T14:32:12.330Z",
    "updatedAt": "2019-12-23T14:32:12.330Z",
    "__v": 0
  },
  {
    "completed": false,
    "_id": "5e4413ad4178df380c726238",
    "description": "This is an example task",
    "owner": "5dfd2083c08fac0dc4b767ba",
    "createdAt": "2020-02-12T15:03:09.280Z",
    "updatedAt": "2020-02-12T15:03:09.280Z",
    "__v": 0
  }
]
```

```sh
GET /tasks/:id
```
```sh
Status: 200 OK
{
  "completed": false,
  "_id": "5e4413ad4178df380c726238",
  "description": "This is an example task",
  "owner": "5dfd2083c08fac0dc4b767ba",
  "createdAt": "2020-02-12T15:03:09.280Z",
  "updatedAt": "2020-02-12T15:03:09.280Z",
  "__v": 0
}
```

```sh
PATCH /tasks/:id
```
```sh
Status 200 OK
{
  "completed": true,
  "_id": "5e4413ad4178df380c726238",
  "description": "This is an example task",
  "owner": "5dfd2083c08fac0dc4b767ba",
  "createdAt": "2020-02-12T15:03:09.280Z",
  "updatedAt": "2020-02-12T15:10:03.369Z",
  "__v": 0
}
```

```sh
DELETE /tasks/:id
```
```sh
Status 200 OK
{
  "completed": true,
  "_id": "5e4413ad4178df380c726238",
  "description": "This is an example task",
  "owner": "5dfd2083c08fac0dc4b767ba",
  "createdAt": "2020-02-12T15:03:09.280Z",
  "updatedAt": "2020-02-12T15:10:03.369Z",
  "__v": 0
}
```