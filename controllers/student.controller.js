const Student = require('../models/student.model.js');

module.exports.studentsList = async (req, res, next) => {
	const students = await Student.find();
	res.render('StudentsList/student', {
		students: students
	});
};

module.exports.createStudent = async (req, res, next) => {
	res.render('StudentsList/create');
};

module.exports.postStudentInfo = async (req, res, next) => {
	Student.create(req.body);
	res.redirect('/student');
};

module.exports.search = async (req, res, next) => {
	const students = await Student.find();
	const q = req.query.search;

	const machedStudents = students.filter(student => 
		student.name.toLowerCase().indexOf(q.toLowerCase()) !== -1 );

	res.render('StudentsList/student', {
		students: machedStudents
	})
};

module.exports.detail = async (req, res, next) => {
	const id = req.params.idStudent;
	const student = await Student.findById(id);
	res.render('StudentsList/detail.pug', {
		student: student
	});
};

module.exports.update = async (req, res, next) => {
	const id = req.params.idStudent;
	const student = await Student.findById(id);

	res.render('StudentsList/update.pug', {
		values: student
	});
};

module.exports.postUpdate = async (req, res, next) => {
	const id = req.params.idStudent;
	const student = await Student.findById(id);

	Student.update(student, req.body).exec((err, result) => {});
	res.redirect('/student');
};

module.exports.delete = async (req, res, next) => {
	const id = req.params.id;
	Student.remove({_id: id}).exec((err, result) => {}) ;
	res.redirect('/student');
};