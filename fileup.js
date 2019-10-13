const fs = require("fs");
const http = require("http");
let image = Buffer.alloc(10000000);

http.createServer((req,res)=>{
   req.on("data",(data)=>{
       image =data;
       console.log(data);
   });
   req.on("end",()=>{

   });
    console.log(image);
    res.end();

}).listen(80);