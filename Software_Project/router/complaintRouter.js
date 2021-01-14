const complaintRouter = require("express").Router();
// const multer=require("multer");

const {registerComplaint,complaintStatus}=require("../controller/complaintController");
const {isUserLoggedIn}=require("../controller/authController");
// const {getAllPlans}=require("../controller/planController");
// check req.cookies=>jwt=>add name
complaintRouter.use(isUserLoggedIn);

console.log("complain function")

complaintRouter.post("/complaintRegister",registerComplaint);
complaintRouter.post("/complaintStatus",complaintStatus);
module.exports=complaintRouter;

