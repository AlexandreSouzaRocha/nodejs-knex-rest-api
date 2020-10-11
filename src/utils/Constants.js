module.exports = {
	MESSAGES: {
		DEFAULT: {
			BAD_REQUEST: 'The request attributes is null or invalid',
		},
		INVALID_JSON: "The request.body isn't on JSON format.",
		INVALID_FIELD: 'The field {} is null or invalid. Unable to process request',
	},
	HTTP_STATUS: {
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
};
