var express = require('express'),
    addTermRouter = express.Router(),
    mongo = require('mongoskin');

//POST - add new definition to definitions array
addTermRouter.post('/addterm', function (req, res){
    var db = res.db;
    db
    	.collection('definitions')
    	.update({
    		_id: mongo.helper.toObjectID('5555c9afe4b02f885ca9a5c5')
    	}, 
    	{ 
    		'$push': {
    			definitions: req.body
    		}
    	}, function(err, result){
    		res.send((err === null) ? {'msg': req.body.term + ' - has been added!'} : {'msg': 'error' + error});
    	});
});

module.exports = addTermRouter;