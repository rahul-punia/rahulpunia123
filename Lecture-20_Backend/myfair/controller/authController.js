//authentication Controller
const userModel=require("../model/userModel");
const secrets=require("../config/secrets");
const jwt=require("jsonwebtoken");
const emailHelper = require("../utility/sendEmail");


async function signup(req,res){
  try{
    const user=await userModel.create(req.body); //create user
    return res.status(200).json({
        status:"user Signuped",
        user
    })
  }catch(err){
     return res.status(501).json({
      status:"User can't be created",
          err
      })
  }
}



//token create
//payload => userid
async function login(req,res){
    try{
     if(req.body.email && req.body.password){
      const user=await userModel.findOne({email:req.body.email}).select("+password");//get whole user data but donot get password because in user
      //schema we make password{select:false} we make a query to get password like .select("+password")
      if(user){  
          console.log(user); 
      if(user.password==req.body.password){
        const id=user["_id"];
        const token=jwt.sign({id},secrets.JWT_SECRET);
        res.cookie("jwt",token,{httpOnly:true});
        return  res.status(200).json({
              status:"UserLogged In",
              user,
              token
          })
      }else{
       return res.status(400).json({
          status:"User can't LoggedIn"
        })
      }
    }else{
        throw new Error("email or password didn't match");
    }
     }
     throw new Error("Invalid Input");
    }catch(err){
        console.log(err)
        return res.status(500).json({
         status:"User can't be loggedIn",
         err
     });
    }
}

//protect route useful for authorization
//token verify
async function protectRoute(req,res,next){  //include next also in parameter
    try{
        let token;
        if(req.headers.authorization){
            token=req.headers.authorization.split(" ").pop();
        }else if(req.cookies.jwt){
          token=req.cookies.jwt;
        }
        
    if(token){
    // const userSentToken=req.body.token;
    const payload=jwt.verify(token,secrets.JWT_SECRET);
    if(payload){
        console.log(payload);   //give userid and iat
        const user=await userModel.findById(payload.id);
        req.role=user.role; 
        req.id=payload.id;
         // return res.status(200).json({
        //     status:"token verified",
        //     payload
        // })
        next();
        
    }else{
        throw new Error("Token is modified please login again");
    }
    }else{
        throw new Error("Please login first");
    }
    }catch(err){
        // console.log(err)
        const clientType=req.get("User-Agent");
        if(clientType.includes("Mozilla")==true){
          // backend express se
         return res.redirect("/login");
        }
        return res.status(500).json({
            status:"token not verified",
            err:err.message,
        })
    }
}


async function isUserLoggedIn(req,res,next){  //include next also in parameter
  try{
      let token;
      if(req.cookies.jwt){ //dot match literally
        token=req.cookies.jwt;
      }
  if(token){
  // const userSentToken=req.body.token;
  const payload=jwt.verify(token,secrets.JWT_SECRET);
  if(payload){
      console.log(payload);   //give userid and iat
      const user=await userModel.findById(payload.id);
      req.role=user.role; 
      req.id=payload.id;
      req.userName=user.name;
      next();
       // return res.status(200).json({
      //     status:"token verified",
      //     payload
      // })
  }else{
    next();
      // throw new Error("Token is modified please login again");
  }
  }else{
    next();
      // throw new Error("Please login first");
  }
  }catch(err){
    next();
      // console.log(err)
      // return res.status.json({
      //     status:"token not verified",
      //     err
      // })
  }
}



function isAuthorized(roles) {
    return function (req, res,next) {
      if (roles.includes(req.role) == true) {
        next()
      } else {
        res.status(403).json({
          status: "user not allowed"
        })
      }
    }
  }

async function forgetPassword(req,res){
    const {email}=req.body;

    try{
      const user=await userModel.findOne({email});
      if(user){
       const resetToken=user.createResetToken();//get new token create in usermodel
      const resetPath="http://localhost:3000/api/users/resetPassword/"+resetToken;
      await user.save({validateBeforeSave:false});//save in db and stop run of validator

      //send token on email
      let html=`<h1>"Token":${resetToken}</h1>`, subject="Reset Password";
      
      let options = {
        to: user.email,
        html,
        subject: subject,
        text:resetPath
      }
      await emailHelper(options);
      //email changes   
       res.status(200).json({
         resetPath,
           resetToken,
           status:"Token send to your email"
       })
      }else{
          throw new Error("User not found");
      }
    }catch(err){
      res.status(400).json({
          err,
          status:"cannot reset password"
      })
    }
}

async function resetPassword(req,res){
  try{
    const token =req.params.token;
   const {password,confirmPassword}=req.body;
   const user=await userModel.findOne({
      resetToken:token,
      resetTokenExpires:{$gt:Date.now()}
    });
    
    if(user){
     user.resetPasswordHandler(password,confirmPassword);
     //save in db
    await user.save();
    res.status(200).json({
      status:"Password reseted successfully"
    })
    }else{
      throw new Error("Not a Valid Token")
    }
  }catch(err){
    console.log(err)
    res.status(400).json({
      err,
      status:"some error occur"
    })
  }
}

// async function isAdmin(req,res,next){
//    if(req.role=="admin"){
//        next();
//    }else{
//    res.status(401).json({
//        status:"user not Authorized"
//    })
//     }
// }
module.exports.login=login;
module.exports.signup=signup;
module.exports.protectRoute=protectRoute;
module.exports.isAuthorized=isAuthorized;
module.exports.forgetPassword=forgetPassword;
module.exports.resetPassword=resetPassword;
module.exports.isUserLoggedIn=isUserLoggedIn;
// module.exports.isAdmin=isAdmin;

// It verifies
//sir code
// async function protectRoute(req, res, next) {
//     try {
//       if (req.body.token) {
//         const cToken = req.body.token;
//         const payload = jwt.verify(cToken, secrets.JWT_SECRET);
//         if (payload) {
//           next();
//         } else {
//           throw new Error("Token is modified please login again");
//         }
//       } else {
//         throw new Error("Please login first");
//       }
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({
//         err,
//       });
//     }
//   }

