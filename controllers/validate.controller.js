module.exports.create = (req, res, next) => {
	const errors = [];

	if (!req.body.idStudent) {
		errors.push('ID is not require');
	};

	if (!req.body.name) {
		errors.push('name is not require');
	};

	if (!req.body.phoneNumber) {
		errors.push('phone number is not require');
	};

	if (!req.body.email) {
		errors.push('email is not require');
	};

	if (!req.body.brithOfDay) {
		errors.push('date is not require');
	};

	if (errors.length) {
		res.render('studentsList/create', {
			errors: errors, 
			values: req.body
		});
		return;
	}

	next();
}