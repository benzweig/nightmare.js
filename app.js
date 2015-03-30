var express = require('express');
var app = express();
var path = require('path');
mustacheExpress = require('mustache-express');
//app.get(express.static(path.join(__dirname, 'public')));

app.engine('html', mustacheExpress());          // register file extension mustache
app.set('view engine', 'html');                 // register file extension for partials
app.set('views', __dirname + '/public');
app.use(express.static(__dirname + '/public')); // set static folder

app.post('/', function (req, res) {
  //console.log(req);
  res.render('index.html');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});