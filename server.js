
var express = require('express');
var bodyParser = require('body-parser');
var modularFurniture = require('./modules/balance.js');

var app = express();
var port = 3000;

app.listen(port, function(){
  console.log('Listening for requests on port:' + port);
});

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.post('/', function(req, res) {
//   console.log('received a post request!');
//   res.send(modularFurniture);
// });

app.get('/balance', function(req, res) {
  console.log('Get IT!!!!');
  var randomBalance = modularFurniture.acctBalance(100, 10000);
  res.send(modularFurniture.acctDisplay(randomBalance));
});
