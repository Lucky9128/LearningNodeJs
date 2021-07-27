var http = require("http");
var maths = require("./myOwnModule");

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    var sum = maths.addition(10,20)
    res.end("Hello world!\t"+sum);
}).listen(8080);