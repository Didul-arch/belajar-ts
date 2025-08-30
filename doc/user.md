# User API Spec

## Register User

Endpoint : POST /api/users/login

Request Body :
```json
{
  "username": "didul",
  "password": "terkedul"
}
```


Response Body (success):
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
  "errors": "Nama gaboleh Kosong"
}
```
## Login User
Endpoint : POST /api/users

Request Body :
```json
{
  "username": "didul",
  "password": "terkedul",
  "name": "Didul Ganteng"
}
```


Response Body:
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

## Get User

## Update User

## Logout User