var https = require('https');
var data = '';

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
      response.setEncoding('utf8');
      response.on('data', function(chunk) {
        data += chunk;
        console.log(chunk + "/n");
      });
    });
  }

 getAndPrintHTMLChunks();