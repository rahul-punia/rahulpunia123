const jwt=require("jsonwebtoken");
const express=require("express");
const app=express();
const secret="vdksfksfsk";
const payload="dhjsfsdjfhdjsfhjshd";
app.use(express.json());
//token create
app.get("/tokenCreater",function(req,res){
    try{
        const token=jwt.sign({payload},secret);
        res.status(201).json({
            token
        })
    }catch(err){
        res.status(500).json({
            err,
            status:"Token could not be created"
        });
    }
});


//token verify
app.post("/tokenVerifier",async function(req,res){
    try{
     const userSentToken=req.body.token;
     const payload=jwt.verify(userSentToken,secret);
     if(payload){
         console.log(payload);
         res.status(200).json({
             status:"token Verified",
             payload
         })
     }
    }catch(err){
        res.status(500).json({
            err,
            status:"Token could not be verified"
        })
    }
});

app.listen(3000,function(req,res){
    console.log("server is listening at port 3000");
})