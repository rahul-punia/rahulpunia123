const mongoose=require("mongoose");
const secrets=require("../config/secrets");
mongoose.connect(secrets.DB_LINK
,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true}
).then(function(db){
    // console.log(db);
    console.log("ReviewDB connected");
}).catch(function(err){
    console.log(err);
})

const reviewSchema=new mongoose.Schema({
  review:{
      type: String,
      required:[true,"Review Can't be empty"]
  },
  rating:{
      type:Number,
      min:1,
      max:10,
      required:[true,"Review must contain some Rating"]
  },
  createdAt:{
      type: Date,
      default:Date.now()
  },
  plan:{
      type:mongoose.Schema.ObjectId,
      ref:"newPlanModel",
      required:[true,"Review must belong to a plan"]
  },
  user:{
      type:mongoose.Schema.ObjectId,
      ref:"newUserModel",
      required:[true,"Review must have some user"]
  }
})

const reviewModel=mongoose.model("reviewModel",reviewSchema);
module.exports=reviewModel;