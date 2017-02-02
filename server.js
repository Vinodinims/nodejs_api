var http = require('http');
var fs = require('fs')
var server = http.createServer(function (req, res) {
    displayForm(res);
});

function displayForm(res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

server.listen(8081);
console.log("server listening on 8081");

var http = require('https');
var url = 'https://restcountries.eu/rest/v1/all';
var fs = require('fs');
var Response;
http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        Response = JSON.parse(body);
        console.log("Got a response: ", Response);
       
        
    });

}).on('error', function(e){
      console.log("Got an error: ", e);
});
var opn = require('opn');
opn('https://restcountries.eu/rest/v1/all');

//var express = require('express');

//var request = require('request');
//var app = express();
//app.use(express.bodyParser());

//app.get('/test', function(req, res){
 // request('https://restcountries.eu/rest/v1/all', function (error, response, body) {
  //  if (!error && response.statusCode == 200) {
    //  var info = JSON.parse(body)
      //res.send(info);
    //}
  //})
//});
//app.listen(8081);
//console.log("The server is now running on port 8081.");