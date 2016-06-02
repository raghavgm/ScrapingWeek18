//Require Packages
var app = express();
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var request = require('request');
var cheerio = require('cheerio');


//Database 

// Schemas
var Note = require('./model/Note.js');
var Article = require('./model/Article.js');


//Routes
app.get('/', function(req, res) {
  	res.send(index.html);
});


app.listen(4000, function() {
  console.log('Server listening on port 4000');
});