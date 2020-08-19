// var http = require("http");
// var fs = require('fs');
// var sql = require('sqlite3').verbose();

// function fun(req,res)
// {
//     fs.readFile('index.html',function(err,data)
//     {
//         if(err)
//         {
//             res.writeHead(404,{'Content-Type':'text/plain'});
//             res.end("404");
//         }
//         else
//         {
//             res.writeHead(200,{'Content-Type':'text/html'});
//             let sq = new sql.Database('Lux9128.db');


//             var qry = "Select name from myTable1 where id=?";
//             // var id = req.params.empid;
//             sq.get(qry,id,function(err,row)
//             {
//                 if(err)
//                 {
//                     res.end("no data found");
//                 }
//                 else
//                 {
//                     res.write("Employee name : "+row.name.toString());
//                 }
//             });
//             res.end(data);
//         }
//     });
// }

// http.createServer(fun).listen(8080);
// console.log("server started");


const express = require('express')
const app = new express();
var path = require('path');
var sqlite = require('sqlite3').verbose();
app.use(express.urlencoded({
    extended: true
  }))


console.log("Server stated");
app.post('/lucky',function(req,res)
{
    uname = req.body.uname;
    pass = req.body.pass;
    console.log(uname);
    var db = new sqlite.Database('Lux9128.db');
    var qry = "Select name from myTable1 where name= '"+uname+"' and pass='"+pass+"'";
    console.log(qry);
    db.get(qry,function(err,row)
    {
        if(err)
        {
            res.write(err.message.toString());
        }
        else
        {
            str = row.name.toString();
            if(str==uname)
            {
                res.write("user logged in");
            }
            else
            {
                res.write("User login fail");
            }
        }
    });


    console.log("Get req");
    res.sendFile(path.join(__dirname + "/index.html"));
});
app.get('/',function(req,res)
{
    console.log("Get req2");
    res.sendFile(path.join(__dirname + "/index.html"));
});
app.post('/lucky',function(req,res)
{   
    res.send("hello2");
});
app.listen(8080);


