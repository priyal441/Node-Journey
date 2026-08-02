const http=require("http");
const fs=require("fs");
const url=require("url");
const express=require ("express");

const app=express();
app.get('/',(req,res)=>{
  return res.send("hello from express server");
});

app.get("/about",(req,res)=>{
  return res.send("hello from about page");
})


app.listen(8000,()=>console.log("server is listening on port 8000"));
// const myserver=http.createServer(app);


// const  myserver=http.createServer((req,res)=>{

  
//  const log=`${Date.now()}:${req.method}:New Req Receive`;
//   const myurl=url.parse(req.url);
//   // console.log(myurl);
//   fs.appendFile('log.txt',log,(err,data)=>{
    
//     res.end("helo from the server");
//   });
//   console.log("request has been made from browser to server");
                    
// });

// myserver.listen(8000,()=>console.log("server is listening on port 8000"));