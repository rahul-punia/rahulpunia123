const userRouter = require("express").Router();
const {
  getAllUser,
  getUser,
  updateUser,
  deleteUser,createUser
} = require("../controller/userController");
// const {checkId} = require("../utility/utilityfn");
userRouter
  .route("")
  .get(getAllUser)
  .post(createUser);

userRouter
  .route("/:id")
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);
module.exports = userRouter;