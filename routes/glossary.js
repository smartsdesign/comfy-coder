var express = require('express'),
    glossaryRouter = express.Router();

// Get glossary list
glossaryRouter.get('/list', function (req, res, next){
    var db = res.db;
    db.collection('definitions').find().toArray(function (err, items){
        res.json(items);
    });
});

//get single defintion
glossaryRouter.get('/definition/:itemId', function (req, res, next){
    var db = res.db;
    db.collection('definitions').find({ 
        "definitions.itemId" : req.params.itemId }, {
            "definitions.$": 1
    }).toArray(function (err, result){
        res.json(result);
    });
});

module.exports = glossaryRouter;