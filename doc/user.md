# User API Spec

## Register User

*Endpoint : GET /api/users*
Request Body :
```json
{
  "username": "didul",
  "password": "terkedul",
  "name": "Didul Ganteng"
}
```
Response Body (Success):
```json
{
  "username": "didul",
  "name": "Didul Ganteng"
}
```

Response Body (Failed):
```json
{
  "errors": "Nama gaboleh Kosong"
}
```
## Login User
*Endpoint : POST /api/users/login*

Request Body :
```json
{
  "username": "didul",
  "password": "terkedul"
}
```


Response Body (Success):
```json
{
  "data" : {
    "username": "didul",
    "name": "Didul Ganteng",
    "token": "inItokEnmiSalnYa"
  }
}
```



Response Body (Failed):
```json
{
  "errors": "Username or password is wrong!"
}
```

## Get User

*Endpoint: POST /api/users/current*

Request Header: X-API-TOKEN: token

Response Body (Success):
```json
{
  "data" : {
    "username": "didul",
    "name": "Didul Ganteng"
  }
}
```

Response Body (Failed):
```json
{
  "errors": "Unauthorized"
}
```

## Update User

*Endpoint : PATCH /api/users/current*
Request Header: X-API-TOKEN: token

Request Body :
```json
{
  "name": "Didul Ganteng",
  "password": "gantipw123"
}
```
Response Body (Success):
```json
{
  "name": "Didul Ganteng",
  "password": "gantipw123"
}
```

Response Body (Failed):
```json
{
  "errors": "Unauthorized"
}
```

## Logout User
*Endpoint : DELETE /api/users/current*
Request Header: X-API-TOKEN: token

Response Body (Success):
```json
{
  "data": "OK"
}
```

Response Body (Failed):
```json
{
  "errors": "Unauthorized"
}
```