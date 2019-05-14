const express = require('express');
var multer  = require('multer'); // mã hoá 

const controller = require('../controllers/student.controller.js');

const router = express.Router();
const upload = multer({ dest: './public/uploads/' });

router.get('/', controller.studentsList);

router.get('/create', controller.createStudent);

router.post('/create',
	upload.none(), 
	controller.postStudentInfo
	);

router.get('/detail/:idStudent', controller.detail);

router.get('/update/:idStudent', controller.update);

router.get('/delete/:id', controller.delete);

module.exports = router;