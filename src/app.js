var express = require('express');
var app = express();
var router = express.Router();
//Rotas
var index = require('./routes/index');
var personRoute = require('./routes/personRoute');
app.use('/', index);
app.use('/persons', personRoute);
module.exports = app;var express = require('express');
//const app = express();
//const router = express.Router();
//Rotas
//const index = require('./routes/index');
//const personRoute = require('./routes/personRoute');
app.use('/', index);
app.use('/persons', personRoute);
module.exports = app;