module.exports = {
	MESSAGES: {
		DEFAULT: {
			BAD_REQUEST: 'The request attributes is null or invalid',
			DATABSE_ERROR:
				'Internal error occur while executing query on database. Unable to process request',
		},
		INVALID_JSON: "The request.body isn't on JSON format.",
		INVALID_FIELD: 'The field {} is null or invalid. Unable to process request',
	},
	HTTP_STATUS: {
		OK: 200,
		CREATED: 201,
		BAD_REQUEST: 400,
		NOT_FOUND: 404,
		CONFLICT: 409,
		SERVER_ERROR: 500,
	},
	EXCEPTIONS: {
		DATABASE: 'DatabaseException',
		VALIDATION: 'ValidationException',
		SERVER_ERROR: 'ServerErrorException',
		CONFLICT: 'ConflictException',
	},
	JOI: {
		CONFIG: {
			abortEarly: false,
			stripUnknown: {
				objects: true,
				arrays: false,
			},
		},
	},
	REGEX: {
		NAME: /[A-Z][a-zA-Z][^#&<>\\"~;$^%{}?]{1,128}$/,
		DOCUMENT: /^[0-9]{11,11}/,
	},
	DATE: {
		ISO8601: 'YYYY-MM-DDThh:mm:ss:sss',
		SAO_PAULO_TZ: 'America/Sao_Paulo',
	},
	ROUTE_PREFIX: '/v1',
};
