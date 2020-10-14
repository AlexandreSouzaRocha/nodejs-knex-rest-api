# nodejs-knex-rest-api
Rest API with NodeJs and Knex(Query Builder)

*******
Content Table
1. [Working](#motiva)
2. [Resources](#requests)
3. [Running](#running)

*******

<div id='motiva'/> 

## Working

This project is a PoC usng knex query builder to learn about the library using with postgresql database.

`Example of knex connection:`

```javascript
const knex = require('knex');

const {
	DB: { HOST, PASSWORD, PORT, USER, NAME },
} = require('../config/env');

const connection = {
	client: 'pg',
	connection: {
		host: HOST,
		user: USER,
		password: PASSWORD,
		database: NAME,
		port: PORT,
	},
};

module.exports = knex(connection);
```

<div id='requests'/>

## Resources
*******
| Resource | Method | Description
|  :-------:  |---------|
|```/v1/user``` | POST | Register a user on databse |

*******

> ## `[POST] /v1/user`

Register a user on database

#### Request Body

 ```

	"userName": "Alexandre",
	"userLastName": "Rocha",
	"birthDate": "2000-07-29",
	"documentNumber": "23085514796",
}
```

| Field | Description | Type | Required |
|-------|-----------|  
| userName | User first name | String | `Yes` |
| userLastName | User last name | String | `Yes` |
| birthDate | User birth date | Date (Format `YYYY-MM-DD`) | `Yes` |
| documentNumber | User document number | String (MAX length 11 characters.) | `Yes` |


If the request is executed and the application is up, the response will be:  ( `HTTP Status Code: 201` )

 `Response`

 ```
{
    "userId": 1,
	"userName": "Alexandre",
	"userLastName": "Rocha",
	"birthDate": "2000-07-29",
	"documentNumber": "23085514796",
	"createdDate": "2020-10-12T13:45:40:000",
	"updatedDate": "2020-10-12T13:45:40:000",
	"requestId": "809b35ff-64d1-4e9e-8509-d0df8de5c9e0

",
}
```
| Field | Description |
|-------|-----------|  
| userId | User identifier | 
| userName | User first name | 
| userLastName | User last name |
| birthDate | User birth date |
| documentNumber | User document number |
| createddate | Created date of registry on database |
| updatedDate | Last updated date of registry on database |
| requestId | Request identifier |

#### - Exceptions 

| Status Code | Message |
|  :-------:  |---------|
| 400 | The request attributes is null or invalid |
| 400 | The request.body isn't on JSON format.|
| 400 | The field `{filedname}` is null or invalid. Unable to process request |
| 500 | Internal error occur while executing query on database. Unable to process request |

<div id='running'/>

## Running

- To run this project on local machine, follow the steps below:

#### 1. Install the dependencies:

- [NodeJs](https://nodejs.org/en/) 
- [npm](https://www.npmjs.com/get-npm)
- [postgresql](https://www.postgresql.org/download/)

#### 2. Runn the command bellow to install node dependencies:

```bash
npm install --save
```

#### 3. Create the table on postgres databse:

- Atention: Before create the table, you should create a schema `knex` and the database name maybe `microservices`, 
and then create the user `knex_user` with password like `{Eh2l+n?#JqSb8?`.

```sql
CREATE TABLE knex.user (
    id primary key BIGSERIAL NOT NULL,
    name CHARACTER VARYING NOT NULL,
    last_name CHARACTER VARYING NOT NULL,
    birth_date TIMESTAMP(4) WITHOUT TIME ZONE NOT NULL,
    document_number VARCHAR(16) github_profile VARCHAR(255) NOT NULL,
    created_date TIMESTAMP(4) WITHOUT TIME ZONE NOT NULL,
    updated_date TIMESTAMP(4) WITHOUT TIME ZONE NULL,
    request_id UNIQUE VARCHAR(128),
) WITH (OIDS = false) TABLESPACE pg_default;
CREATE UNIQUE INDEX user_document_number_idx ON knex.user('document_number')
WHERE ('document_number' IS NOT NULL);
CREATE UNIQUE INDEX user_request_id_idx ON knex.user('request_id')
WHERE ('request_id' IS NOT NULL);
CREATE UNIQUE INDEX user_document_number_request_id_idx ON knex.user('document_number', 'request_id')
WHERE (
        'document_number' IS NOT NULL
        AND 'request_id' IS NOT NULL
    );
```
#### 4. Create the `.env` file and put this in there:

```
PORT = 3000
DB_USER = knex_user
DB_PASSWORD = {Eh2l+n?#JqSb8?
DB_PORT = 5432
DB_HOST = 127.0.0.
DB_NAME = microservices
```

#### 5. Lastly, run the command below to start the server:

```bash
npm start
```