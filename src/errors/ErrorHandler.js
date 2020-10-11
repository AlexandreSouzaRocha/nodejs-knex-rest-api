const CustomException = require('./CustomException');
const logger = require('../utils/logger');
const {
	EXCEPTIONS: { CONFLICT, DATABASE, SERVER_ERROR, VALIDATION },
	HTTP_STATUS,
	MESSAGES: {
		DEFAULT: { BAD_REQUEST },
	},
} = require('../utils/Constants');

class ErrorHandler {
	constructor() {
		this.message = BAD_REQUEST;
		this.statusCode = HTTP_STATUS.SERVER_ERROR;
		this.exceptionType = SERVER_ERROR;
	}

	getError(err, statusCode, exceptionType) {
		logger.info({ event: 'ErrorHandler.getError', error: err });

		this.statusCode = statusCode;
		this.exceptionType = exceptionType || SERVER_ERROR;
		if ([CONFLICT, DATABASE, SERVER_ERROR].includes(exceptionType)) {
			this.message = err;
			this.statusCode = statusCode;
			this.exceptionType = exceptionType;
		}
		if ([VALIDATION].includes(exceptionType)) {
			this.message = err.message || err.details[0].message;
			this.statusCode = statusCode;
			this.exceptionType = exceptionType;
		}

		logger.error({ event: 'ErrorHandler.getError', error: err, statusCode: this.statusCode });

		throw new CustomException(this.message, this.statusCode, exceptionType, err);
	}
}

module.exports = ErrorHandler;
