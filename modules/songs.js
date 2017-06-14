var express = require('express');
var router = express.Router();

var songs = [];
var temp = {
	song: 'mmmBop',
	aartist: 'Hansen'
};
songs.push(temp);

var temp = {
	song: 'mmm mmm mmm',
	artist: 'Crash Test Dummies'
};
songs.push(temp);

router.get('/', function(req, res) {
	res.send(songs);
});

module.exports = router;
