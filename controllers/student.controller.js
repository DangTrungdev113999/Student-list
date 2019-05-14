const Student = require('../models/student.model.js');

module.exports.studentsList = async function(req, res, next) {
	const students = await Student.find();
	res.render('StudentsList/student', {
		students: students
	});
};

module.exports.detail = async function(req, res, next) {

};

module.exports.update = async function(req, res, next) {

};

module.exports.delete = async function(req, req, next) {

};