const winston = require('winston');

const { createLogger, format, transports } = winston;
const { combine, timestamp, printf, json } = format;

const customFormat = printf((info) => {
	const message = {
		level: info.level,
		timestamp: info.timestamp,
		message: info.message,
		requestId: global.requestId,
	};

	return `[${info.level.toUpperCase()}]: ${JSON.stringify(message)}`;
});

const logger = createLogger({
	format: combine(json(), timestamp(), customFormat),
	transports: [new transports.Console()],
});

module.exports = logger;
