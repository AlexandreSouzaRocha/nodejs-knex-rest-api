const cors = require('cors');
const express = require('express');
const uuid = require('uuid').v4();
const {
	MESSAGES: { INVALID_JSON },
	HTTP_STATUS,
} = require('./src/utils/Constants');

class App {
	constructor() {
		this.application = express();
	}

	middleware() {
		this.application.use(cors());
	}

	bodyParser() {
		this.application.use(express.urlencoded({ extended: true }));
		this.application.use((request, response, next) => {
			express.json()(request, response, (err) => {
				if (err) {
					return response
						.status(HTTP_STATUS.BAD_REQUEST)
						.send({ message: INVALID_JSON, requestId: uuid() });
				}
				next();
			});
		});
	}
}

module.exports = new App().application;
