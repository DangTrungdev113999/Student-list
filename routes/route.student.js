var express = require('express');

var controller = require('../controllers/student.controller.js');

var router = express.Router();

router.get('/', controller.studentsList);

router.get('/detail/:id', controller.detail);

router.get('/update/:id', controller.update);

router.get('/delete/:id', controller.delete);

module.exports = router