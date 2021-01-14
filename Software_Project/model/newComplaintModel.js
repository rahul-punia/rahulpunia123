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
    console.log("ComplaintDB connected");
}).catch(function(err){
    console.log(err);
})

//define schema
const complainSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    ContactNumber:{
        type:String,
        required:true,
       maxlength:[10,"Your contact Number length is more than 10 character"] 
    },
    Date:{
        type:String,
        required:true,
        // maxlength:[40,"Your plan length is more than 40 character"]
    },
    Zone:{
        type:String,
        required:true,
    },
    
    Broad_Category:{
        type:String,
        required:true
    },
    Complaint_Details:{
        type:String,
        required:true
    },
    ComplaintAddress:{
        type:String,
        required:true
    },
    ComplaintNumber:{
        type:String,
        required:true
    }
    // ,
    // ComplaintNumber:{
    //     type:String,
    //     required:true
    // }
})
//schema compile in to model
const newComplaintModel=mongoose.model("ComplaintModel",complainSchema);
module.exports=newComplaintModel;