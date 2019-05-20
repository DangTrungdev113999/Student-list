const express = require('express');
var multer  = require('multer'); // mã hoá 

const validate = require('../controllers/validate.controller.js');

const controller = require('../controllers/student.controller.js');

const router = express.Router();
const upload = multer({ dest: './public/uploads/' });

router.get('/', controller.studentsList);

router.get('/search', controller.search);

router.get('/create',  controller.createStudent);
router.post('/create',
	upload.none(), 
	validate.create,
	controller.postStudentInfo
	);

router.get('/detail/:idStudent', controller.detail);

router.get('/update/:idStudent', controller.update);
router.post('/update/:idStudent', 
	upload.none(),
	controller.postUpdate);

router.get('/delete/:id', controller.delete);

module.exports = router;