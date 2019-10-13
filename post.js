const http = require("http");
const queryString = require("querystring");

http.createServer((req,res)=>{

    let age ;
    req.on("data",function (data) {
        age = data;
    });


    req.on('end',function () {

    })

}).listen(80);