const express=require("express");
const bookingRouter=express.Router();
const {createSession}=require("../controller/bookingController");
const {protectRoute}=require("../controller/authController");
bookingRouter.post("/createSession",protectRoute,createSession);//protectRoute,
module.exports=bookingRouter;