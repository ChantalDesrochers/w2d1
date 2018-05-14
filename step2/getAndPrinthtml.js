var https = require('https');
var data = '';

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      data += chunk;
    });
    response.on('end', function() {
      console.log(data);
    })
  });
}



getAndPrintHTMLChunks();