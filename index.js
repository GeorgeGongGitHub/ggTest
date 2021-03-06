var express = require('express')
var app = express()
var port = process.env.PORT || 80
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})
// responde with a health check status 200
app.get('/check', (req, res) => {
    console.log('Health Check Request');
    res.send('status:200')
    res.status(200).end();
});

// let status = 200;
// setTimeout(() => {
//     status = 503;
//     console.log('Status changed to 503');
// }, 20000);
// app.get('/check', (req, res) => {
//     console.log(`Health Check Request ${status}`);
//     res.status(status).end();
// });
//response with meta data of the application
app.get('/meta',(req,res) => {
  var pjson = require('./package.json');
  var exjson = {};

  exjson.appName = pjson.name;
  exjson.version = pjson.version;
  exjson.description = pjson.description;
  exjson.PORT = pjson.PORT;
   //res.send(JSON.stringify(exjson));
   res.send(exjson);
});

app.listen(port, () => {
  console.log(`Api Server running on ${process.env.PORT} port, PID: ${process.pid}`);
});