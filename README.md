# 🚧 Under Construction 🚧

# hangboard-express-server

Server handles POST and GET requests from hangboard-timer [client](https://github.com/michaelfswann/hangboard-timer".

Routes protected using JWT and Auth0.

Data served is stored on MongoDB.

Docker images available [here](https://hub.docker.com/repository/docker/michaelfswann/hangboard-server).

## Stack
-Node.js
-Express.js
-MongoDB

## Data looks like this 
    {
		"_id": "601ddfd8c0b9ca9f572a049e",
		"date_of_session": "2020-11-04",
		"user_email": "example@gmail.com",
		"weight_added_in_kg": 17.5,
		"max_hang_session": true,
		"rest_time_seconds": 120,
		"hanging_time_seconds": 5,
		"number_sets": 6
    }
