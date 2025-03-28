## Backend API Documentation

# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST 

### Description:
This endpoint is used to register a new user. It validates the input data and creates a new user in the database.

### Request Body:
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing the user's email address (required, must be a valid email).
- `password`: A string with a minimum length of 5 characters (required).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

# User Login Endpoint

## Endpoint: `/users/login`

### Method: POST

### Description:
This endpoint is used to log in an existing user. It validates the input data and returns an authentication token if the credentials are correct.

### Request Body:
The request body should be a JSON object with the following fields:

- `email`: A string representing the user's email address (required, must be a valid email).
- `password`: A string with a minimum length of 5 characters (required).

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response:
The response will be a JSON object containing the authentication token and user details.

Example:
```json
{
  "token": "your-authentication-token",
  "user": {
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com"
  }
}
```

# User Profile Endpoint

## Endpoint: `/users/profile`

### Method: GET

### Description:
This endpoint retrieves the profile information of the authenticated user.

### Authentication:
Requires a valid JWT token in the Authorization header or cookies.

### Response:

#### Success (200 OK):
```json
{
  "_id": "user-id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```
# User Logout Endpoint

## Endpoint: `/users/logout`

### Method: GET

### Description:
This endpoint logs out the currently authenticated user by clearing the authentication token cookie and blacklisting the token.

### Authentication:
Requires a valid JWT token in the Authorization header or cookies.

### Response:
```json
{
  "message": "logged out successfully"
}
```

# Captain API Documentation

## Captain Registration Endpoint

### Endpoint: `/captains/register`

### Method: POST

### Description:
This endpoint is used to register a new captain. It validates the input data and creates a new captain in the database.

### Request Body:
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string (optional).
- `email`: A string representing the captain's email address (required, must be a valid email).
- `password`: A string with a minimum length of 5 characters (required).
- `vehicle`: An object containing:
  - `colour`: A string with a minimum length of 3 characters (required).
  - `plate`: A string with a minimum length of 3 characters (required).
  - `capacity`: An integer with a minimum value of 1 (required).
  - `vehicleType`: A string that must be "bus" (required).

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "colour": "Red",
    "plate": "ABC123",
    "capacity": 50,
    "vehicleType": "bus"
  }
}
