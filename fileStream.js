
let fs = require('node/fs');


let ws = fs.createWriteStream('text.txt');


ws.once('open',()=>{
    console.log('流已打开');
});

ws.once('close',()=>{
    console.log('流已关闭');
});

ws.write("123");
ws.write("123");
ws.write("123");
ws.write("123");

ws.end();