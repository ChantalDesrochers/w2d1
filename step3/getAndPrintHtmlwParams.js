var https = require('https');
var data = '';

function getAndPrintHTML(options) {

  // var requestOptions = {
  //   host: 'sytantris.github.io',
  //   path: '/http-examples/step2.html'
  // };

  https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(chunk) {
      data += chunk;
    });
    response.on('end', function() {
      console.log(data);
    })
  });
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions);