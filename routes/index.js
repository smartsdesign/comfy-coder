var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	'title': 'Web terminology wiki',
  	'description': 'Web development jargon explained' 
  });
});

module.exports = router;
