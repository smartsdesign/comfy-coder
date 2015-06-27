var express = require("express"),
	mongo = require("mongoskin"),
	deleteTermRouter = express.Router();

	deleteTermRouter.delete("/deleteterm/:term", function(req, res){
		var db = res.db;
		
		db
			.collection("definitions")
			.update({
				"_id": mongo.helper.toObjectID("558ea8dde4b0cfb129e131bb")
			},{
				"$pull": {
					"definitions": { "term": req.params.term }
				}
			}, function(err, result){
				res.send((err === null) ? { "msg": req.params.term + ", has been expunged!"} : { "msg": "error" + err });
			});
	});

module.exports = deleteTermRouter;