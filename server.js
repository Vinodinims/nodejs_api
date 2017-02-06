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

var connect = require('connect');
var app = connect();
var cors = require('cors');
var request = require('request');
var bodyParser = require('body-parser');

app.use(bodyParser());
app.use(cors());

request('https://restcountries.eu/rest/v1/all').pipe(fs.createWriteStream('data.json'));
   var fs = require('fs');
    var file = __dirname + '/data.json';
    var http = require ('http');
    var server = http.createServer(function (req, res){
    res.writeHead(200);

    fs.readFile(file, 'utf8', function (err, data) {
            if (err) {
            console.log('Error: ' + err);
            return;
            }

    data = JSON.parse(data);
    console.log(data);
    res.end(JSON.stringify(data));
    });


    });
        server.listen(8000);

//var http = require('https');
//var url = 'https://restcountries.eu/rest/v1/all';
//var fs = require('fs');
//var Response;
//http.get(url, function(res){
    //var body = '';

    //res.on('data', function(chunk){
      //  body += chunk;
    //});

    //res.on('end', function(){
        //Response = JSON.parse(body);
      //  console.log("Got a response: ", Response);
       
        
    //});

//}).on('error', function(e){
  //    console.log("Got an error: ", e);
//});
//var opn = require('opn');

//opn('https://restcountries.eu/rest/v1/all');




 //var server = http.createServer(function (req, res){
  //  res.writeHead(200);
//request.get('https://restcountries.eu/rest/v1/all', function (error, response, body) {
  //  if (!error && response.statusCode == 200) {
    //  var info = JSON.parse(body)
        
      //console.log(info);
    //response.end(JSON.stringify(info));
    //response.end();
    //}
  //})
//});

//server.listen(3000);
//console.log("The server is now running on port 3000.");


