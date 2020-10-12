const moment = require('moment-timezone');
const {
	DATE: { ISO8601, SAO_PAULO_TZ },
} = require('./Constants');

class Commons {
	constructor() {}

	getLocaleDate() {
		return moment().tz(SAO_PAULO_TZ).format(ISO8601);
	}

	getFormatedDate(date, format, tz = SAO_PAULO_TZ) {
		return moment(date).tz(tz).format(format);
	}

	getUserData(userInfo) {
		const dbPayload = {
			name: userInfo.Name,
			last_name: userInfo.userLastNamelast_name,
			birth_date: userInfo.birthDate,
			document_number: userInfo.documentNumber,
			created_date: userInfo.createdDate,
			updated_date: userInfo.updatedDate,
			request_id: userInfo.request_id,
		};

		return dbPayload;
	}
}

module.exports = Commons;
