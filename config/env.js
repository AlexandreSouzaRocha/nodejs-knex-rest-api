module.exports = {
	PORT: process.env.PORT || 3000,
	DB: {
		USER: process.env.DB_USER || 'knex_user',
		PASSWORD: process.env.DB_PASSWORD || 'm{Eh2l+n?#JqSb8?',
		PORT: process.env.DB_PORT || 5432,
		HOST: process.env.HOST || '127.0.0.1',
		NAME: process.env.DB_NAME || 'microservices',
	},
};
