var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var corsOptions = {
  origin: 'http://localhost:9000'
};
var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');

var app = express();

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true}));
app.use(express.static(__dirname + '/public'));

  app.post('/login', userCtrl.login);
  app.get('/login', profileCtrl.pushProfile);



app.listen(3000, function() {
  console.log('listening on port ' + 3000);
  console.log('All clear, Captain!');
})
