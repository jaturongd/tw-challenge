var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	console.log('enter index');
	res.render('index', { title: 'My page',text: 'Jaturong.d' });
});

module.exports = router;