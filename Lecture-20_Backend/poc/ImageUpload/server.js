const express = require("express");
const multer = require("multer");
// single file upload
const sharp = require("sharp");
const path = require("path");
const app = express();
const fs = require("fs");
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

const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/raw")
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



app.use(express.json());
//  mutipart data=> everything=> image  , naming , extension => put 
app.post("/uploadData", upload.single("photo"), uploadFile)
async function uploadFile(req, res) {
  try {
    console.log(req.file);
    await sharp(req.file.path)
      .resize(500, 500)
      .toFormat("jpeg")
      .jpeg({ quality: 30 })
      .toFile(`public/final/user-${Date.now()}.jpeg`)
// // remove file 
      fs.unlinkSync(req.file.path);
    res.status(200).json({
      status: "data uploaded successfully"
    })
  } catch (err) {
    console.log(err.message);
  }
}
// upload.array => mutiple of same type
//upload.fields=> multiple types of image
app.listen(3000, function () {
  console.log("Server is listening at port 3000");
})











// const express=require("express");
// const multer=require("multer");
// const sharp=require("sharp");
// const path=require("path");
// const fs=require("fs");

// const app=express();
// app.use(express.json());

// // const upload=multer({dest:"public"})
// // Multer adds a body object and a file or files object to the request object. The body object contains 
// // the values of the text fields of the form, the file or files object contains the files uploaded via the form.

// const filter=function(req,file,cb){
//   if(file.mimetype.startsWith("image")){
//     cb(null,true)
//   }else{
//     cb(new Error("Not an Image!Please upload an Image"),false)
//   }
// }

// var multerStorage=multer.diskStorage({
//   destination:function(req,file,cb){
//     cb(null,'public/raw')
//   },
//   filename:function(req,file,cb){
//     cb(null,'user-${Date.now()}.jpeg')
//   }
// })

// var upload=multer({
//   storage:multerStorage,
//   fileFilter:filter
// })



// app.post("/uploadData",upload.single("photo"),uploadFile);

// async function uploadFile(req,res){
//   await sharp(req.file.path)
//         .resize(200,200)
//         .toFormat("jpeg")
//         .jpeg({quality:30})
//         .toFile(`public/img/users/user-${Date.now()}.jpeg`);

//   console.log(req.file);
//   console.log(req.body);
//    fs.unlinkSync(req.file.path);
//   res.status(200).json({
//     status:"file uploaded successfully"
//   })
// }

// app.listen("3000",function(){
//   console.log("Server is started at port 3000");
// })
























// const express = require("express");
// const multer = require("multer");
// // single file upload
// const sharp = require("sharp");
// const app = express();
// // barebone
// // const upload = multer({ dest: "/public" });
// // dest multer
// //filter => images 
// const filter = function (req, file, cb) {
//   if (file.mimetype.startsWith("image")) {
//     cb(null, true)
//   } else {
//     cb(new Error("Not an Image! Please upload an image"), false);
//   }
// }
// //storageFilter => file=> jpg,destination
// // const multerStorage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "public/img/users")
// //   },
// //   filename: function (req, file, cb) {
// //     cb(null, `user-${Date.now()}.jpeg`)
// //   }
// // })
// // ram
// let multerStorage = multer.memoryStorage();
// const upload = multer({
//   storage: multerStorage,
//   fileFilter: filter
// })
// app.use(express.json());
// //  mutipart data=> everything=> image  , naming , extension => put 
// app.post("/uploadData", upload.single("photo"), uploadFile)
// async function uploadFile(req, res) {
//   // console.log(req.file);
//   // console.log(req.body);
//   // processing
//   try{

 
//   await sharp(req.file.buffer)
//     .resize(500, 500)
//     .toFormat("jpeg")
//     .jpeg({ quality: 30 })
//     .toFile(`/public/img/users/user-${Date.now()}.jpeg`)

//   res.status(200).json({
//     status: "data uploaded successfully"
//   })
// }catch(err){
//   console.log(err.message);
// }
// }
// // upload.array => mutiple of same type
// //upload.fields=> multiple types of image
// app.listen(3000, function () {
//   console.log("Server is listening at port 3000");
// })