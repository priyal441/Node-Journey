const http=require("http");
const fs=require("fs");
const url=require("url");
const  myserver=http.createServer((req,res)=>{
  const log=`${Date.now(req.url)}:New Req Receive`;
  const myurl=url.parse(req.url);
  console.log(myurl);
  fs.appendFile('log.txt',log,(err,data)=>{
    
    res.end("helo from the server");
  });
  console.log("request has been made from browser to server");
                    
});

myserver.listen(8000,()=>console.log("server is listening on port 8000"));