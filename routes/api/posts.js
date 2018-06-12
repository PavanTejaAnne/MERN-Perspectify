var mongoose = require("mongoose");
var express = require("express");
var router = express.Router();

router.get('/test', function(req,res){
    res.json({msg: "Posts works"});
});

module.exports = router;