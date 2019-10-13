
const http = require("http");
const fs = require("fs");



let server = http.createServer(function (request,response) {
    let filename = "./node/www"+request.url;

    fs.readFile(filename,function (err,data) {
        if (!err){
            response.write(data);
            response.end();
        }else{
            try{

            }catch(e){
                console.log(e);
                response.end();
            }
        }
    });
});


server.listen(80);