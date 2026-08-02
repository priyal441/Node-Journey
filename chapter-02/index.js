const express= require('express');

const app=express();
const port=3000;
const users= require('./MOCK_DATA.json')



app.route("/api/users/:id")
.get((req,res)=>{
    const id=Number(req.params.id);
const user=users.find((user)=>user.id===id);
return res.json(user);
})
.post((req,res)=>{
return res.json({status:"pending"});
})
.patch((req,res)=>{
    return res.json({status:"pending"});
})
.delete((req,res)=>{
    return res.json({status:"pending"});
})

// app.get("/api/users",(req,res)=>{
//     return res.json(users);
// })


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`); 
})

