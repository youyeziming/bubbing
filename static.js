const express = require("express");

let app = express();

app.set("view","./view");

app.set("view engine","ejs");

app.use("/",(req,res)=>{
   res.render("index",{});
});


app.listen(8080);




