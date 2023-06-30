### Introduction: This API allows users to reserve rental cars online.

Authentication: Users must sign up and sign in to use this API.
Endpoints:

```
User Sign Up: POST /api/v1/users
User Sign In: POST /api/v1/login
User Logoff : DELETE /api/v1/logoff
Show List of Rental Cars: GET /API/v1/cars
Create a Renztal Car: POST /api/v1/cars/
Details of a Rental Car: GET /api/v1/cars/:id
Submit Reservation Form: POST /api/v1/rentals
```

### Request and Response Formats:

User Sign Up:
Request Format:
{
    "user": {
        "email": "sajibsiddiqui@gmail.com",
        "first_name": "Sajib",
        "last_name": "Siddiqui",
        "age": 32,
        "gender": "male"
    }
}
Response Format:
{
    "status": "created"
}
User Sign In:
Request Format:
{
    "user": {
        "email": "sajibsiddiqui@gmail.com"
    }
}
Response Format:
{
    "status": "ok"
}

Show List of Rental Cars:
Request Format: None
Response Format:
[
    {
        "id": 1,
        "model": "Toyota Corolla 2019",
        "rent_price": 200.5,
        "status": "available",
        "image": "http://example.com/image1"
    },
    {
        "id": 2,
        "model": "Honda Civic 2020",
        "rent_price": 200.5,
        "status": "used",
        "image": "http://example.com/image2"
    }
]
Create a Rental Car:
Request Format:
{
   "car": {
        "car_model": "Toyota Corolla 2022",
        "rent_price": 100.5,
        "car_status": "available",
        "car_image": "http://example.com/image3"
    }
}
Response Format:
{
    "id": 6,
    "car_model": "Toyota Corolla 2022",
    "car_status": "available",
    "rent_price": 100.5,
    "car_image": "http://example.com/image3",
    "created_at": "2023-06-26T19:27:01.430Z",
    "updated_at": "2023-06-26T19:27:01.430Z"
}
Details of a Rental Car:
Request Format: None
Response Format:
{
    "model": "Toyota Corolla 2022",
    "rent_price": 100.5,
    "status": "available",
    "image": "http://example.com/image3"
}
Submit Reservation Form:
Request Format:
{
    "rental": {
        "car_id": 5,
        "date_rent": "2023-06-23",
        "date_return": "2023-06-25",
        "destination": "xyz"
    }
}
Response Format:
{
    "id": 3,
    "date_rent": "2023-06-23T00:00:00.000Z",
    "date_return": "2023-06-25T00:00:00.000Z",
    "destination": "xyz",
    "user_id": 12,
    "car_id": 5,
    "created_at": "2023-06-26T19:37:03.230Z",
    "updated_at": "2023-06-26T19:37:03.230Z"
}}

Error Handling: If there is an error, the API will return an error response with a message explaining what went wrong.
Best Practices: To avoid rate limiting, we recommend that users cache responses whenever possible.