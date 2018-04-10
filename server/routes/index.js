var express = require('express');
var router = express.Router();
const request = require('request')
const apiurl = 'http://api.github.com/users/'

/* GET home page. */
router.get('/:login', function(req, res) {

	const options = {
		url: apiurl + req.params.login + 'repos',
		headers: {
			'User-Agent': req.params.login
		}
	}

	request.get(options, (err, resp, body) => {
		res.json(JSON.parse(body))
	})
})


module.exports = router;
