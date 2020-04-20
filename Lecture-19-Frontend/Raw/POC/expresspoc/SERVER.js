const express=require("express");
const app=express();
// Make a public folder for client
app.use(express.static("myfair"));
//Take direct input from form
app.use(express.urlencoded({extended:true}));

app.post("/api/submit",function(req,res){
    const {name,email,option,feedback,checkbox}=req.body;
    console.log("Name="+name);
    console.log("Email="+email);
    console.log("Option="+option);
    console.log("Feedback="+feedback);
    console.log("CheckBox="+checkbox);
    res.json({ data: req.body+"Response Accepted"});
})

app.listen(3000,function(){
    console.log("server has started listening at port 3000")
})