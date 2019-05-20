require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true});

const studentRoute = require('./routes/route.student.js');
const authRouter = require('./routes/route.auth.js');

const authMiddleware = require('./middleware/login.middleware.js');

const app = express();

const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()); // không hỗ trợ mutilpart/form-data
app.use(bodyParser.urlencoded({ extended: true})); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));

app.get('/', function (req, res) {
  // res.send('Hello World');
  res.render('index.pug', {
  	"name": "C1807I"
  });
});

app.use('/student', authMiddleware.requireAuth, studentRoute);
app.use('/auth', authRouter);

app.listen(port, function() {
	console.log('sever listening on: ' + port);
});