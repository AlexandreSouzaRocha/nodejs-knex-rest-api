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
