class CustomException extends Error {
	constructor(message, statusCode, exceptionType, completeError) {
		super();
		this.message = message;
		this.statusCode = statusCode;
		this.exceptionType = exceptionType;
		this.completeError = completeError;
	}
}

module.exports = CustomException;
