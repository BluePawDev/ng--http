var express = require('express');
var router = express.Route();
var path = require('path');

router.get('/', function(req, res) {
	console.log('base URL hit');
	res.sendFile(path.resolve('views/index.html'));
});

modules.exports = router;
