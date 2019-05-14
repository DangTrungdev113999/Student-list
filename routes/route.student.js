var express = require('express');

var controller = require('../controllers/student.controller.js');

var router = express.Router();

router.get('/', controller.studentsList);

router.get('/detail/:idStudent', controller.detail);

router.get('/update/:idStudent', controller.update);

router.get('/delete/:idStudent', controller.delete);

module.exports = router