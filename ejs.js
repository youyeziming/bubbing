const express = require("express");
const fs = require("fs");
const ejs = require("ejs");
const http = require("http");




let app = express();

app.get("/js/:name",(req,res)=>{
    res.end(ejs.render("./node/view/index"));
});

app.listen(8080);