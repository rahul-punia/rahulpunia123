const viewRouter=require("express").Router();
const {getTrialPage,getHomePage,getPlansPage}=require("../controller/viewController")
viewRouter.get("/trial",getTrialPage);
viewRouter.get("/",getHomePage);
viewRouter.get("/plan",getPlansPage);
module.exports=viewRouter;