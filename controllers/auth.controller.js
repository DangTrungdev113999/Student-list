const md5 = require('md5');

const Student = require('../models/student.model.js');

module.exports.login = async (req, res ,next) => {
	res.render('auth/login.pug');
};

module.exports.postLogin = async (req, res, next) => {
	const errors = [];
	const email = req.body.email;
	const password = req.body.password;
   	
	const student = await Student.findOne({ email: email });

	if (!student) {
		errors.push('student dose not exsit');
		res.render('auth/login.pug', {
			errors,
			values: req.body
		});
		return;
	};

	const hashedPassword = md5(password);

	if (student.password !== hashedPassword) {
		errors.push('wrong password');
		res.render('auth/login.pug', {
			errors,
			values: req.body
		});
		return;
	}

	 res.cookie('studentId', student._id, {
 		signed: true
	 });
	res.redirect('/student');
};