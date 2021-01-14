const userRouter = require("express").Router();
const multer=require("multer");
const {signup,login,protectRoute,isAuthorized,forgetPassword,resetPassword}=require("../controller/authController");
const {getUser,getAllUser,updateUser,deleteUser,updateProfileImage}=require("../controller/userController")
//////////////JSON///////////////////
// const {
//   getAllUser,
//   getUser,
//   updateUser,
//   deleteUser
// } = require("../controller/userController");
// // const {checkId} = require("../utility/utilityfn");
// userRouter
//   .route("")
//   .get(getAllUser)
//   .post(checkbody, createUser);

// userRouter
//   .route("/:id")
//   .get(getUser)
//   .patch(updateUser)
//   .delete(deleteUser);

/////////////////////DB//////////////////////////
userRouter.post("/signup",signup);
userRouter.post("/login",login);
userRouter.patch("/forgetPassword",forgetPassword);
userRouter.patch("/resetPassword/:token",resetPassword);
// profile page
userRouter.use(protectRoute);
userRouter.post("/getMe",getUser);

// barebone
// const upload = multer({ dest: "/public" });
// dest multer
//filter => images 
const filter = function (req, file, cb) {
    if (file.mimetype.startsWith("image")) {
      cb(null, true)
    } else {
      cb(new Error("Not an Image! Please upload an image"), false)
    }
  }
  //storageFilter => file=> jpg,destination
  //If you specify 'dest' option in multer() it will save the file to that directory and 
  //you will have to pass that directory to sharp() like this sharp(req.file.path)
  // Otherwise you can drop the dest option and pass the buffer to sharp() sharp(req.file.buffer) 

  const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/img/users/")
    },
    filename: function (req, file, cb) {
      cb(null, `user-${Date.now()}.jpeg`)
    }
  })
  // ram
  
  const upload = multer({
    storage: multerStorage,
    fileFilter: filter
  })

  //  mutipart data=> everything=> image  , naming , extension => put 
userRouter.patch("/ProfileImage", upload.single("photo"), protectRoute, updateProfileImage);

// isAuthorized
// admin
userRouter.use(isAuthorized(["admin"]));
// userRouter.use(isAdmin);
userRouter.route("").get(getAllUser);
userRouter.route("/:id")
.patch(updateUser)
.delete(deleteUser);
module.exports = userRouter;