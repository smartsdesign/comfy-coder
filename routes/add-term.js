var express = require('express'),
    addTermRouter = express.Router(),
    mongo = require('mongoskin');

//POST - add new definition to definitions array
addTermRouter.post('/addterm', function (req, res){
    var db = res.db;
    db
    	.collection('definitions')
    	.update({
    		_id: mongo.helper.toObjectID('558ea8dde4b0cfb129e131bb')
    	},{ 
    		'$push': {
    			definitions: req.body
    		}
    	}, function(err, result){
    		res.send((err === null) ? {'msg': req.body.term + ' has been added successfully!'} : {'msg': 'error' + error});
    	});
});

module.exports = addTermRouter;