const logger = require('../utils/logger');
const ErrorHandler = require('../errors/ErrorHandler');
const UserService = require('../services/UserService');
const Validators = require('../validations/Validators');
const {
	HTTP_STATUS: { SERVER_ERROR, CREATED },
} = require('../utils/Constants');

const errHandler = new ErrorHandler();
const userService = new UserService();
const validators = new Validators();

module.exports.postUser = async (request, response) => {
	const { body } = request;
	try {
		logger.info({ event: 'UserController.postUser', requestBody: body });

		const userValidated = await validators.validateUser(body);
		const userResponse = await userService.saveUser(userValidated);

		logger.info({ event: 'UserController.postUser', responseBody: userResponse });

		return response.status(CREATED).json(userResponse);
	} catch (err) {
		logger.error({
			event: 'UserController.postUser',
			error: err.message,
			statusCode: err.statusCode,
		});

		return response.status(err.statusCode || SERVER_ERROR).json(errHandler.getErrorResponse(err));
	}
};
