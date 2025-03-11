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

### Example:
- 'user' (object):
    - 'fullname' (object).
        - 'firstname' (string): User's first name (minimum 3 characters).
        - 'lastname' (string): User's last name (minimum 3 characters).
    -'email' (string): User's email address (must be a valid email).
    - 'password' (string): User's password (minimum 6 characters).
- 'token' (String): JWT Token

