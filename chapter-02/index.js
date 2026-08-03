const express= require('express');

const app=express();
const port=3000;
const users= require('./MOCK_DATA.json')
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// app.use((req,res,next)=>{
//     console.log("hello from middleware 1");

//     next();
// }) 

// app.use((req,res,next)=>{
//     console.log("hello from middleware 2");
//     return res.json({msg:'hi'});
    
// }) 

app.get("/api/users",(req,res)=>{
    res.setHeader("x-myname","PriyalGupta"); //Custom Header
    // Always add X to custom header
    return res.json(users);
});

app.route("/api/users")
.get((req,res)=>{
    const id=Number(req.params.id);
const user=users.find((user)=>user.id===id);

return res.json(user);
})

.post((req,res)=>{
    const body=req.body;
    console.log("Body",body);
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

