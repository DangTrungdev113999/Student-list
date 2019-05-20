const Student = require('../models/student.model.js');

module.exports.requireAuth = async (req, res, next) => {
	if (!req.signedCookies.studentId) {
		res.redirect('/auth/login');
		return;
	};

	next();
};