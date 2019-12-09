
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send({msg: 'War never changes 1111111111111111111111111111'});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

