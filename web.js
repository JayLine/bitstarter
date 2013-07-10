var express = require('express');

var app = express.createServer(express.logger());


//var buffer = new Buffer(256);
//buffer.write(fs.readFileSync('index.html',0));

app.get('/', function(request, response) {
  var buffer = new Buffer(256);
  buffer.write(fs.readFileSync('index.html'),'utf-8');

  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
