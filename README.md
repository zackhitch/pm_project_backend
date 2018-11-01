# PinMap

## A Lambda School FSW13 PM Project

### Backend repo for the Lambda PM Project: PinMap - An app for users to display destinations they have been to and destinations on their bucket list.

### Trello https://trello.com/b/LfWXL2Vv/pin-map

## API

| Method | Endpoint                    | Request                                                  | Response                      |
| ------ | --------------------------- | -------------------------------------------------------- | ----------------------------- |
| GET    | /users                      |                                                          | Array of user Objects.        |
| GET    | /users/:email_address       | email_address\*                                          | Single user Object.           |
| GET    | /users/id/:id               | id\*                                                     | Single user Object.           |
| POST   | /users                      | email_address\*, first_name, last_name, home_location    | ID of newly created user.     |
| PUT    | /users/:id                  | id\*                                                     | Count of updated users.       |
| DELETE | /users/:id                  | id\*                                                     | Count of removed users.       |
| GET    | /locations                  |                                                          | Array of location Objects.    |
| GET    | /locations/city/:city       | city\*                                                   | Array of location Objects.    |
| GET    | /locations/state/:state     | state\*                                                  | Array of location Objects.    |
| GET    | /locations/country/:country | country\*                                                | Array of location Objects.    |
| POST   | /locations                  | city\*, state/province, country, longitude\*, latitude\* | ID of newly created location. |
| PUT    | /locations/:id              | id\*                                                     | Count of updated locations.   |
| DELETE | /locations/:id              | id\*                                                     | Count of removed locations.   |

\* - indicates required field
