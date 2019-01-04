require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/public', express.static('public'));

app.use(methodOverride('_method'));

const routes = require('./app/routes/index');
routes(app);

module.exports = app;
