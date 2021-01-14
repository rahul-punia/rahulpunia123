const complaintModel=require("../model/newComplaintModel");
const secrets=require("../config/secrets");

// console.log(complaintModel.length)

async function registerComplaint(req,res){
    const compNumber=req.body.ContactNumber+""+complaintModel.length;
    // req.body.insert(JSON.stringify({"ComplaintNumber":compNumber}));
  try{
    req.body.ComplaintNumber=compNumber; //How to add value in json object V.Imp
    const user=await complaintModel.create(req.body); //create user
    console.log(req.body.ComplaintNumber);
    return res.status(200).json({
        status:"complaint Submitted Successfully",
        ComplaintNumber:compNumber,
        user
    })
  }catch(err){
    // console.log("Invalid Email");
     return res.status(200).json({  //Here I changed status code from  501 t0 200 then alert visible on frontend
      status:"complain can't be Submitted",
          err
      })
  }
}

async function complaintStatus(req,res){
  try{
    console.log(req.body.email+" "+req.body.ComplaintNumber);
   if(req.body.email && req.body.ContactNumber){
    const user=await complaintModel.findOne({ComplaintNumber:req.body.ComplaintNumber}).select("ComplaintNumber");//get whole user data but donot get password because in user
    console.log(user);
    //schema we make password{select:false} we make a query to get password like .select("+password")
    if(user){  
        console.log("User-"+user); 
        return  res.status(200).json({
          status:"Complaint Exist",
          user
      })
    }else{
      throw new Error("Invalid Input");
    }
   }
   throw new Error("Invalid Input");
  }catch(err){
    console.log("Invalid Input");
      return res.status(200).json({    //status codes are v.important
       status:"Invalid Input",////Here I changed status code from  501 t0 200 then alert visible on frontend
       err
   });
  }
}


module.exports.registerComplaint=registerComplaint;
module.exports.complaintStatus=complaintStatus;