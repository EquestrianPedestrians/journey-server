const fs = require('fs');
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const indexRouter = require('./routers/index');
const usersRouter = require('./routers/users');
const tripsRouter = require('./routers/trips');
const destinationsRouter = require('./routers/destinations');


//  CREATE SERVER
const app = express();
const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log('We\'re live at ' + port)
})

//  MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//  REGISTER ROUTES
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/trips', tripsRouter);
app.use('/api/destinations', destinationsRouter);


module.exports = app;
