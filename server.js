require('dotenv').config;
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
var bodyParser = require('body-parser')

const contactRoute = require('./route/contactRoute');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// creating the middleware
app.use(express.json());
app.use(cors());

app.use('/', contactRoute);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (Req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// creating port
const port = process.env.PORT || 5000;

// listening to port.
app.listen(port, console.log('Listening to port ', port));
