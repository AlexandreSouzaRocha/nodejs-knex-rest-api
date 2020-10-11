const logger = require('../utils/logger');

const validateAsync = async (schema, model) => {
	try {
		logger.info({ event: 'joi.config.validateAsync' });

		const validated = await schema.validate(model);

		return validated;
	} catch (err) {
		logger.error({ event: 'joi.config.validateAsync', error: err.details || err.message });

		throw err;
	}
};

module.exports = validateAsync;
