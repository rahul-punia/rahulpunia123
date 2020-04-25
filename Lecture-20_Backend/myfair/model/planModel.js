// const express=require("express");
// const app=express();
//mongoose
const mongoose=require("mongoose");
const secrets=require("../config/secrets");
//mongoose promise based library so use then and catch
//connection
mongoose.connect(secrets.DB_LINK
,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true}
).then(function(db){
    // console.log(db);
    console.log("PlanDB connected");
}).catch(function(err){
    console.log(err);
})

//Define schema
// let userSchema=new mongoose.Schema({
//     name:String,
//     email:String
// })

// //define Model
// const userModel=mongoose.model("userModel",userSchema);

// const newUser=new userModel({
//     name:"Steve",
//     email:"abc@gmail.com",
//     phno:12345
// })
// //save call=>express server=>mongodb server
// newUser.save().then(function(){console.log("A user is saved in demousermodels")}).catch(function(err){
//     console.log(err);
// });
//define schema
const planSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        maxlength:[40,"Your plan length is more than 40 character"]
    },
    duration:{type:Number,required:[true,"You Need to provide duration"]},
    price:{
        type:Number,
        required:true
    },
    ratingsAverage:{
        type:Number
    },
    discount:{
        type:Number,
        validate:{validator:function(){
            return this.price>this.discount;
        },
       message:"Discount must be less than Price"}
    }
})
//schema compile in to model
const newPlanModel=mongoose.model("newPlanModel",planSchema);
module.exports=newPlanModel;
// app.listen(3000,function(req,res){
//     console.log("App is listening at port 3000");
// })