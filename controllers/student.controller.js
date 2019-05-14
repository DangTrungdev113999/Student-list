const Student = require('../models/student.model.js');

module.exports.studentsList = async function(req, res, next) {
	const students = await Student.find();
	res.render('StudentsList/student', {
		students: students
	});
};

module.exports.createStudent = async function(req, res, next) {
	res.render('StudentsList/create');
};

module.exports.postStudentInfo = async function(req, res, next) {
	Student.create(req.body);
	res.redirect('/student');
};

module.exports.detail = async function(req, res, next) {
	const id = req.params.idStudent;
	const student = await Student.findById(id);
	res.render('StudentsList/detail.pug', {
		student: student
	});
};

module.exports.update = async function(req, res, next) {

};

module.exports.delete = async function(req, req, next) {

};