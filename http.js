// let http = require('http');
//
// let service = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html;cahrset=UTF-8"});
//     res.write('hello world');
//     res.end('node js');
// });
//
// service.listen(80,'127.0.0.1');


let http = require('node/http');

let server = http.createServer((req,res)=>{
    console.log(req);
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
   res.end("hello nodejs");
});

server.listen(80,'127.0.0.1');