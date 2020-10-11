const application = require('./App');
const logger = require('./src/utils/logger');
const { PORT } = require('./config/env');

(async () => {
	logger.info({ event: 'EXPRESS' });

	application.listen(PORT, () => {
		logger.info({ event: 'EXPRESS.START', message: `Application connected on port: ${PORT}` });
	});
})();
