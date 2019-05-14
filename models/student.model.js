const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	idStudent: String,
	name: String,
	phoneNumber: Number,
	email: String,
	brithOfDay: String
});

const Student = mongoose.model('Student', studentSchema, "students");

module.exports = Student;