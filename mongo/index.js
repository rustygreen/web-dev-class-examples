var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var app = express();
var personSchema = {
  name: String,
  position: String,
  webpage: String
};
var Person;

mongoose.connect('mongodb://localhost/simple');
Person = mongoose.model('Person', personSchema, 'people');

app.use(cors());
app.use(express.static('public'));

app.get('/people', function (req, res) {
  console.log('Finding people with filter: ', req.query);
  Person.find(req.query, function (err, doc) {
    res.send(doc);
  });
});

app.get('/people/:id', function (req, res) {
  console.log('Finding person with ID: ', req.params.id);
  Person.findById(req.params.id, function (err, doc) {
    res.send(doc);
  });
});

app.listen(3000);