var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	'title': 'Development terminology hub',
  	'description': 'A definition list of commonly used development terminology' 
  });
});

module.exports = router;
