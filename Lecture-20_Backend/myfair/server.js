const express = require("express");
// server create
const app = express();
const userRouter = require("./router/userRouter");
const planRouter = require("./router/planRouter");
const viewRouter=require("./router/viewRouter");
const reviewRouter=require("./router/reviewRouter");
const bookingRouter=require("./router/bookingRouter");

const path=require("path");
const cookieparser=require("cookie-parser");
const ErrorExtender=require("./utility/ErrorExtender");
// 1.middleware
// app.use(function f1(req, res, next) {
//   console.log("middleware that ran before express.json in f1" + req.body);
//   next();
// });

// ``````````````````````````````````````Middlewares``````````````````````````````````````
app.use(express.json());
app.use(cookieparser());
app.use(express.static("public"));
// express=> rendering/set templating engine
app.set("view engine","pug");
// view => directory path (where template store)
app.set("views",path.join(__dirname,"view"));//__dirname give current directory

app.use("/api/plans", planRouter);
app.use("/api/users", userRouter);
app.use("/",viewRouter);
app.use("/api/reviews",reviewRouter);
app.use("/api/bookings",bookingRouter);
app.use("*",function(req,res,next){
  err=new ErrorExtender("Page not found",404);
  next(err);
})

app.use("*",function(err,req,res,next){
  err.statusCode=err.statusCode||500;
  err.status=err.status||"unknown error",
  res.status(err.statusCode).json({
    status:err.status,
    message:err.message
  })
})
const port=process.env.PORT||3000;
app.listen(port, function () {
  console.log("Server has started at port 3000");
});

//3.
// app.use(function f2(req, res, next) {
//   console.log("middleware that ran after express.json  in f2");
//   console.log(req.body);
//   next();
// });
// checkId

// const mongoose=require("mongoose");

// mongoose.connect("mongodb+srv://admin:rahul12345@cluster0-fxfmg.mongodb.net/test?retryWrites=true&w=majority",
// {useNewUrlParser:true,useCreateIndex : true,useUnifiedTopology : true}
// )


