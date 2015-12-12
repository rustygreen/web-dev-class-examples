var tasks = [
  {text: 'XXXXXXXXXlearn angular too', done: true},
  {text: 'build an angular app', done: false},
  {text: 'learn express routing', done: false},
  {text: 'learn mongo db', done: false}
];

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = app.listen(3000, function () {
});

// setup website
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.route('/task')
  .get(function (req, res) {
    console.log('GET request made for tasks')
    res.json(tasks);
  })
  .post(function (req, res) {
    console.log('POST: ', req.body);
    tasks.push(req.body);
    res.send(req.body);
  })
  .put(function (req, res) {
    console.log('PUT: ', req.body);
    // TODO: Update task.
    res.send(req.body);
  })
  .delete(function (req, res) {
    //todo.
  });