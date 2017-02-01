var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 3000;

var directory = __dirname + '/..'
var index = directory + '/index.html';

app.use(express.static(directory));

app.get('*', function(req, res) {
  res.sendFile(path.join(index));
});

app.listen(port);
