const express = require("express");
// server create
const app = express();
const userRouter = require("./router/userRouter");
const planRouter = require("./router/planRouter");
const viewRouter=require("./router/viewRouter");
const path=require("path");
// 1.middleware
// app.use(function f1(req, res, next) {
//   console.log("middleware that ran before express.json in f1" + req.body);
//   next();
// });

// ``````````````````````````````````````Middlewares``````````````````````````````````````
app.use(express.json());

app.use(express.static("public"));
// express=> rendering/set templating engine
app.set("view engine","pug");
// view => directory path (where template store)
app.set("views",path.join(__dirname,"view"));//__dirname give current directory

app.use("/api/plans", planRouter);
app.use("/api/users", userRouter);
app.use("/",viewRouter);

app.listen(3000, function () {
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


