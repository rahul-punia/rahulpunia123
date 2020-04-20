const express=require("express");
const app=express();//create a server name app

app.get("/home",function(req,res){
  res.end("<h1>Response received at Home</h1>");
})
app.get("*",function(req,res){
    res.end("<h1>Error 404 Page Not Found</h1>");
})
app.listen(3000,function(req,res){
    console.log("Server is listening at port 3000");
})