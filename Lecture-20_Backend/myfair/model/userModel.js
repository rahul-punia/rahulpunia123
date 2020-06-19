//mongoose
const mongoose=require("mongoose");
const crypto=require("crypto");
//mongoose promise based library so use then and catch
//connection
const secrets=require("../config/secrets");
mongoose.connect(secrets.DB_LINK
,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true}
).then(function(db){
    // console.log(db);
    console.log("UserDB connected");
}).catch(function(err){
    console.log(err);
})

//Define schema
const userSchema=new mongoose.Schema({
name:{
    type: String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
    minlength:7,
    select:false
},
confirmPassword:{
    type:String,
    minlength:7,
    required:true,
    validate: function(){
        return this.password==this.confirmPassword;
    }
},
role:{
    type:String,
    enum:["admin","user","restaurantowner","deliveryboy"],
    default:"user"
},
profileImage:{
  type:String,
  default:"/img/users/default.jpeg"
},
resetToken:String,
resetTokenExpires:Date
});

//Hooks
// hooks
userSchema.pre("save", function () {
    // db => confirmpassword
    this.confirmPassword = undefined;
  });

  //Generate Token
userSchema.methods.createResetToken=function(){
    const resetToken=crypto.randomBytes(32).toString("hex");
    this.resetToken=resetToken;
    this.resetTokenExpires=Date.now()+1000*10*60;//millisecond
    return resetToken;
} 

userSchema.methods.resetPasswordHandler=function(password,confirmPassword){
    this.password=password;
    this.confirmPassword=confirmPassword;
    this.resetToken=undefined;
    this.resetTokenExpires=undefined;
}

const newUserModel=mongoose.model("NewUserModel",userSchema);

module.exports=newUserModel;