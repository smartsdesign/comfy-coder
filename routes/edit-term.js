var express = require("express"),
    mongo = require("mongoskin"),
    editRouter = express.Router();


	//update
	editRouter.post("/term", function(req, res){
		var db = res.db,
			term = req.body.term,
			definition = req.body.definition;

		db
			.collection("definitions")
			.update({
				"_id": mongo.helper.toObjectID("558ea8dde4b0cfb129e131bb"),
				"definitions.term": term
			},{
				"$set": {
					"definitions.$.definition": definition
				}
			}, function(err, result){
    			res.send((err === null) ? {'msg': term + ' has been updated!'} : {'msg': 'error' + err});
    		});
	});

module.exports = editRouter;
