const express=require("express");
const app=express();
//mongoose
const mongoose=require("mongoose");
//mongoose promise based library so use then and catch
//connection
mongoose.connect("mongodb+srv://admin:rahul12345@cluster0-fxfmg.mongodb.net/test?retryWrites=true&w=majority"
,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true}
).then(function(db){
    // console.log(db);
    console.log("PlanDB connected");
}).catch(function(err){
    console.log(err);
})

//Define schema
let userSchema=new mongoose.Schema({
    name:String,
    email:String
})

//define Model
const userModel=mongoose.model("userModel",userSchema);

const newUser=new userModel({
    name:"Steve",
    email:"abc@gmail.com",
    phno:12345
})
//save call=>express server=>mongodb server
newUser.save().then(function(){console.log("A user is saved in demousermodels")}).catch(function(err){
    console.log(err);
});
app.listen(3000,function(req,res){
    console.log("App is listening at port 3000");
})