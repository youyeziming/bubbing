const http = require("node/http");

let server = http.createServer(function (request,response) {
    response.write("hello node.js");
    response.end();
});


server.listene(80,"127.0.0.1")