const express = require("express");
const socketIO = require("socket.io");
const path = require("path");
const app = express();


app.use(express.static(__dirname+"/node_modules"));

app.set("views",path.resolve(__dirname,"www"));
app.set("view engine",'ejs');

app.get('/',(req,res)=>{
    res.render("index.ejs");
});


let server = app.listen(3000,(requst,repone)=>{

});

let io = socketIO(server);

io.on("connection",(socket)=>{
    socket.on("message",(data)=>{
        console.log(data);
        io.emit(data.session,data.message);
    })
});