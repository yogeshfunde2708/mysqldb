var express = require("express");
var app = express();
var connection = require('./database');

require('./models/app');

app.get('/', function(req,res){
    
        res.send("hello!");
    });

app.listen(3000, function(){
    console.log('app listening on port 3000');
    connection.connect(function(err){
        if(err) throw err;
        console.log('Database connect');
    })
});