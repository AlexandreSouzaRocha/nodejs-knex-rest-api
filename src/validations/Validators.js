const Joi = require('joi');
const ErrorHandler = require('../errors/ErrorHandler');
const logger = require('../utils/logger');
const {
	JOI: { CONFIG },
	HTTP_STATUS: { BAD_REQUEST },
	EXCEPTIONS: { VALIDATION },
	MESSAGES: { INVALID_FIELD },
	REGEX: { NAME, DOCUMENT },
} = require('../utils/Constants');
const validateAsync = require('./joi.config');

class Validators {
	constructor() {
		this.errHandler = new ErrorHandler();
	}

	async validateUser(requestBody) {
		try {
			const schema = Joi.object()
				.options(CONFIG)
				.keys({
					userName: Joi.string()
						.regex(NAME)
						.required()
						.error(Error(INVALID_FIELD.replace('{}', 'userName'))),
					userLastName: Joi.string()
						.regex(NAME)
						.required()
						.error(Error(INVALID_FIELD.replace('{}', 'userLastName'))),
					birthDate: Joi.date()
						.iso()
						.required()
						.error(Error(INVALID_FIELD.replace('{}', 'birthDate'))),
					documentNumber: Joi.string()
						.regex(DOCUMENT)
						.required()
						.error(Error(INVALID_FIELD.replace('{}', 'birthDate'))),
				});

			return await validateAsync(schema, requestBody);
		} catch (err) {
			logger.error({ event: 'Validators.validateUser', error: err.details || err.message });

			this.errHandler.getError(err || err.stack, BAD_REQUEST, VALIDATION);
		}
	}
}

module.exports = Validators;
