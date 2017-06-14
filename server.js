// Requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./modules/index');

// Uses
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/', index);

// Globals
var port = process.env.PORT || 7890;

// Spin-up server
app.listen(port, function() {
	console.log('server up on:', port);
});
