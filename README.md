# PinMap

## A Lambda School FSW13 PM Project

### Backend repo for the Lambda PM Project: PinMap - An app for users to display destinations they have been to and destinations on their bucket list.

### Trello https://trello.com/b/LfWXL2Vv/pin-map

## API

| Method | Endpoint                    | Request                                               | Response                  |
| ------ | --------------------------- | ----------------------------------------------------- | ------------------------- |
| GET    | /users                      |                                                       | Array of user Objects.    |
| GET    | /users/:email_address       | email_address\*                                       | Single user Object.       |
| GET    | /users/id/:id               | id\*                                                  | Single user Object.       |
| POST   | /users                      | email_address\*, first_name, last_name, home_location | ID of newly created user. |
| PUT    | /users/:id                  | id\*                                                  | Count of updated users.   |
| DELETE | /users/:id                  | id\*                                                  | Count of updated users.   |
|        |                             |                                                       |                           |
| GET    | /locations                  |                                                       |                           |
| GET    | /locations/city/:city       |                                                       |                           |
| GET    | /locations/state/:state     |                                                       |                           |
| GET    | /locations/country/:country |                                                       |                           |
| POST   | /locations                  |                                                       |                           |
| PUT    | /locations/:id              |                                                       |                           |
| DELETE | /locations/:id              |                                                       |                           |

\* - indicates required field
