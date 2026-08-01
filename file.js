// const fs=require ("fs");

//this is a SYNC CAll
// fs.writeFileSync("./text.txt","hey there");

//ASYNC CALL
// fs.writeFile("./text.txt","hi there",(err)=>{
//     if(err){
//         console.log("error occured");
//     }
// });

// const result =fs.readFileSync("./contact.txt","utf-8");
// console.log(result);

// fs.readFile("./contact.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("error occured");       
                     
//     }else{
//         console.log(data);
//     } 

  // });

  // fs.appendFileSync("./contact.txt","hello there");

  // fs.cpSync("./contact.txt","./newContact.txt");
  // fs.unlinkSync("./newContact.txt");

  // console.log(fs.statSync("./contact.txt"));

  const os=require("os");
  console.log(os.cpus().length);
