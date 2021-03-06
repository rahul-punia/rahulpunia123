const viewRouter=require("express").Router();
const {getTrialPage,getHomePage,getLoginPage,getProfilePage,logout,forgetPassword,signupPage,resetPassword,getComplaintPage,getComplaintStatus}=require("../controller/viewController")
const {isUserLoggedIn,protectRoute}=require("../controller/authController");
// const {getAllPlans}=require("../controller/planController");
// check req.cookies=>jwt=>add name
viewRouter.use(isUserLoggedIn);
viewRouter.get("/trial",getTrialPage);
viewRouter.get("/",getHomePage);
viewRouter.get("/complaintStatusPage",getComplaintStatus);
viewRouter.get("/RegisterComplaint",getComplaintPage);
// viewRouter.get("/plans",getPlansPage);
viewRouter.get("/login",getLoginPage);
viewRouter.get("/profile",protectRoute,getProfilePage);
viewRouter.get("/logout",logout);
// viewRouter.get("/managePlans",managePlans);
// viewRouter.get("/getAllPlans",getAllPlans);
// viewRouter.get("/createPlan",createPlan);
// viewRouter.get("/deletePlan",deletePlan);
// viewRouter.get("/updatePlan",updatePlan);
viewRouter.get("/forgetPassword",forgetPassword);
viewRouter.get("/resetPassword",resetPassword);
viewRouter.get("/signup",signupPage);
module.exports=viewRouter;