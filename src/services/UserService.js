const logger = require('../utils/logger');
const ErrorHandler = require('../errors/ErrorHandler');
const Commons = require('../utils/Commons');
const UserRepo = require('../repositories/UserRepo');

class UserService {
	constructor() {
		this.errHandler = new ErrorHandler();
		this.commons = new Commons();
		this.userRepo = new UserRepo();
	}

	async saveUser(userBody, requestId) {
		const user = {};
		const { userName, userLastName, birthDate, documentNumber } = userBody;
		try {
			logger.info({ event: 'UserService.saveUser', userBody });

			user.userName = userName;
			user.userLastName = userLastName;
			user.birthDate = birthDate;
			user.documentNumber = documentNumber;
			user.createdDate = this.commons.getLocaleDate();
			user.updatedDate = this.commons.getLocaleDate();
			user.requestId = requestId;

			const savedData = await this.userRepo.saveUser(this.commons.getUserData(user));

			logger.info({ event: 'UserService.saveUser', savedData });

			return savedData;
		} catch (err) {
			logger.error({ event: 'UserService.validateUser', error: err.message });

			throw err;
		}
	}
}

module.exports = UserService;
