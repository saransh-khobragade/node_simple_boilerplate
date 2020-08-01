const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  responseTime = require('response-time');

app.use(responseTime());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});
require("./core/routes")(app);

global.constant = require('./utilities/constant')

process.on('uncaughtException', (error) => {
  let response = process.current_res;
  if (response) {
    response.status(error.status || 500).jsonp({ message: error.message });
  }
  console.log("[index.js][uncaughtException] message : " + error.message);
  console.log("[index.js][uncaughtException] stack : " + error.stack);
});

process.on('unhandledRejection', (reason, promise) => {
  let response = process.current_res;
  let error = new Error(reason);
  if (reason instanceof Error) {
    error = reason;
  }
  if (response) {
    console.log("[index.js][unhandledRejection] reason: " + error.message);
    http_response.bad_request(response, reason, app_constants.res_code_bad_request);
  }
  console.log("[index.js][unhandledRejection] reason: " + error.message);
});

app.use((error, req, res, next) => {
  console.log("[index.js][error] : " + error.message);
  res.status(error.status || 500).jsonp({ message: error.message });
});

app.listen(1000, () => {
  console.log('[index.js] server running on port: ' + 1000);
});

module.exports = app;