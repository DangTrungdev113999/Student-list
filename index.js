
const express = require('express');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/students-List', {useNewUrlParser: true})

const studentRoute = require('./routes/route.student.js');

const app = express();

const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', function (req, res) {
  // res.send('Hello World');
  res.render('index.pug', {
  	"name": "C1807I"
  })
});

app.use('/student', studentRoute);

app.listen(port, function() {
	console.log('sever listening on: ' + port);
});