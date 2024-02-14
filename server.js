const express= require('express');
const app= express();
const fs=require('fs');
// const zlib= require('zlib');

// fs.createReadStream("./RTS.txt").pipe(zlib.createGunzip().pipe(fs.createWriteStream("./RTS.txt")));
app.get('/', function(req, res){
const stream=fs.createReadStream("./RTS.txt","utf-8");
stream.on('data',(chunk)=>{
    res.write(chunk);
});
stream.on('end',function(){
    res.end();
});
});

app.listen(300,()=>{
    console.log("Server is running on port 300");
})