const fs = require('fs');
const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const morgan = require('morgan');


// const key = fs.readFileSync('journey-key.pem');
// const cert = fs.readFileSync('journey-cert.pem');
// const https_options = {
//     key: key,
//     cert: cert
// };

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('We\'re live at ' + port)
})
// const server = https.createServer(https_options, app).listen(port, function() {
//   console.log('Port ' + port + ' is in business, bitchesss!')
// })

//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

module.exports = app;
