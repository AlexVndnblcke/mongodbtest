var express = require('express');
var app = express();
var model = require('./model.js');
var insert = require('./insert.js');
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var routes = require('./routes/route.js');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

routes(app);

app.listen(8080,function(){
    console.log("Listening...");
});



// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  insert(assert, db, model, ()=>{
    db.close();
  });
});
