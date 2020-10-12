const ErrorHandler = require('../errors/ErrorHandler');
const logger = require('../utils/logger');
const knex = require('../../connection/knex');
const {
	MESSAGES: {
		DEFAULT: { DATABSE_ERROR },
	},
	HTTP_STATUS: { SERVER_ERROR },
	EXCEPTIONS: { DATABASE },
} = require('../utils/Constants');

class UserRepo {
	constructor() {
		this.connection = knex;
		this.errHandler = new ErrorHandler();
	}

	async saveUser(userInfo) {
		try {
			logger.info({ event: 'UserRepo.saveUser', userInfo });

			const userSaved = await this.connection('user').withSchema('knex').insert(userInfo, '*');

			logger.info({ event: 'UserRepo.saveUser', userSaved });

			return userSaved;
		} catch (err) {
			logger.error({ event: 'UserRepo.saveUser', error: err.message || err.stack });

			this.errHandler.getError(DATABSE_ERROR, SERVER_ERROR, DATABASE);
		}
	}
}

module.exports = UserRepo;
