class UserModel {
	constructor() {}

	getModel(data) {
		const parsedData = {
			userId: data.Id,
			userName: data.name,
			userLastName: data.last_name,
			birthDate: data.birthDate,
			documentNumber: data.document_number,
			createdDate: data.created_date,
			updatedDate: data.updated_date,
			requestId: data.request_id,
		};

		return parsedData;
	}
}

module.exports = UserModel;
