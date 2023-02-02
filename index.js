const fs   = require('fs');
const http = require('http');

let server = http.createServer((req,res)=>{
    let date = new Date()

    fs.writeFile(`${date}.txt`,`${date}`,'utf-8',(err)=>{
        if(err)
            console.log(err)
        else
        {
            fs.readFile(`${date}.txt`,'utf-8',(err,data)=>{
                res.writeHead(200,{ 'Content-Type': 'text/html' });
                res.end(data)
            })
        }
    })
})

server.listen(8000,() => console.log('Server is listening port 8000'))