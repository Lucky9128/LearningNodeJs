var http = require("http");
var fs = require('fs');
var url = require('url');


http.createServer(function (req, res){
    res.writeHead(400, {'Content-Type':'text/html'});
    const args = url.parse(req.url, true).query;
    const fileName = args.name;
    fs.readFile('Files/'+fileName, function(err, data){
        res.write(data);
        return res.end("\n");
    });
}).listen(8080);