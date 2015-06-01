var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	'title': 'Web terminology wiki',
  	'description': 'A definition list of commonly used development terminology' 
  });
});

module.exports = router;
