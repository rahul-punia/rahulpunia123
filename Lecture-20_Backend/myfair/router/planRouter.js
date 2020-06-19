const planRouter = require("express").Router();
const {
  getAllPlans,
  getPlan,
  updatePlan,
  deletePlan,
  createPlan
   } = require("../controller/planController");
// const { checkId } = require("../utility/utilityfn");

// planRouter.param("id", checkId);
const { protectRoute,isAuthorized }=require("../controller/authController");
// planRouter.use(protectRoute);
// planRouter.use(isAuthorized(["admin","restaurantowner"]));
planRouter
  .route("")
  .get(getAllPlans)
  .post(protectRoute,createPlan);

planRouter
  .route("/:id")
  .get(getPlan)
  .patch(protectRoute,updatePlan)
  .delete(protectRoute,deletePlan);
module.exports = planRouter;