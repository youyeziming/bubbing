

const fs = require('node/fs');

let buffer = new Buffer.from('你好世界1');

 fs.open('text.txt','a',(err,fd)=>{

    fs.writeFile(fd,buffer,(err)=>{
        if (!err){
            console.log('写入成功');
        }
        fs.close(fd,(err)=>{
            console.log('保存成功');
        })
    });
 });



