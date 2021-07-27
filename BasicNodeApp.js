var http = require("http");
var url = require('url');

http.createServer(function (req, res){
    res.writeHead(400, {'Content-Type':'text/html'});
   
    // taking arguments from the url like get request
    var q = url.parse(req.url, true).query;
    var date = "" + q.year + "-" + q.month + "-" + q.date ;
    res.write("DOB -> " + date);
    res.end();
}).listen(8080);