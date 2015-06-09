var express = require('express'),
    addTermRouter = express.Router();

//POST add add definition
addTermRouter.post('/add-term', function(req, res){
    var db = res.db;
    res.send('add-term page');
});