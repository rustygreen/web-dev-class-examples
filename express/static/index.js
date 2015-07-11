var express = require('express');
var app = express();
var server = app.listen(3000, function () {});

// setup static files
//app.use(express.static('public'));

// setup static files with route
app.use('/abc', express.static('public'));