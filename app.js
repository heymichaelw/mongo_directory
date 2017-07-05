const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/directory', function(req, res){
  context = {};
  MongoClient.connect("mongodb://localhost:27017/mwrobotdb", function(errors, db){
    const collection = db.collection("users");
    collection.find({}).toArray(function(error, results){
      context.model = results;
      res.render('directory', context);
    });
  });
});

app.listen(3000);
