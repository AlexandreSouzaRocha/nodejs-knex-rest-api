const Joi = require('joi');
const ErrorHandler = require('../errors/ErrorHandler');
const logger = require('../utils/logger');
const {
	JOI: { CONFIG },
	HTTP_STATUS: { BAD_REQUEST },
	EXCEPTIONS: { VALIDATION },
} = require('../utils/Constants');
const validateAsync = require('./joi.config');

class Validators {
	constructor() {
		this.errHandler = new ErrorHandler();
	}

	async validateUser(requestBody) {
		try {
			const schema = Joi.object().options(CONFIG).keys({});

			return await validateAsync(schema, requestBody);
		} catch (err) {
			logger.error({ event: 'Validators.validateUser', error: err.details || err.message });

			this.errHandler.getError(err || err.stack, BAD_REQUEST, VALIDATION);
		}
	}
}

module.exports = Validators;
