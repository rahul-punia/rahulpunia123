// File saved to: C:\Downloads\logo.png
function downloadFile(url) {
    // We are downloading the file here
    console.log("Downloading file from: " + url);
    var path = "C:\\Downloads\\";
    var img = url.split("/").pop();
    var dImg = url + "//" + img;
    return new Promise(function (resolve,reject){
        setTimeout(function() {
            resolve(dImg);
          }, 3000);
    })
    // let's assume it takes 3 seconds to download
    // accepts url of image and callback which is called when downloading is done
  }
  //zip.lib
  // We are compressing: C:\Downloads\logo.png
  // File compressed to: C:\Downloads\logo-resized.png
  function compressFile(filePath) {
    console.log("We are compressing: " + filePath);
    var ext = filePath.split(".").pop();
    var path = filePath.split(".").shift();
    var cImg = path + "-resized." + ext;
    return new Promise(function (resolve,reject){
    setTimeout(function() {
      resolve(cImg);
    }, 2000);
    });
    // let's assume it takes 2 seconds to compress
    //accepts  image filepath and callback which is called when compressesion is done
  }
  function uploadFile(diskPath) {
    var uploadUrl = "http://pep/uploads";
    console.log("Uploading to: " + uploadUrl);
    var img = diskPath.split("\\").pop();
    var uImg = uploadUrl + "/" + img;
    return new Promise(function (resolve,reject){
    setTimeout(function() {
      resolve(uImg);
    }, 3000);
    });
    // We will upload this file, it takes 3 seconds,
    // let's assume it takes 3 seconds to upload
    //accepts  image filepath and callback which is called when uploading is done
  }
  //Remove Nesting
  async function helper(){
      const dImg=await downloadFile("http://google.com/logo.png");
      console.log("File saved to " + dImg);
      const cImg=await compressFile(dImg);
      console.log("File compressed to " + cImg);
      const UImgUrl=await uploadFile(cImg); 
      console.log("File uploaded to " + UImgUrl);
      console.log("Task completed");
    
  }
  helper();
// downloadFile("http://google.com/logo.png")
// .then(function(dImg) {
//         console.log("File downloaded to " + dImg);
//         return compressFile(dImg);
//        })
//        .then(function(cImg) {
//         console.log("File saved to " + cImg);
//          return uploadFile(cImg);
//        })
//         .then(function(UImgUrl) {
//             console.log("File uploaded to " + UImgUrl);
//             console.log("Task completed");
//           }).catch(function(err){
//               console.log(err);
//           });

  // client
//   downloadFile("http://google.com/logo.png", function(dImg) {
//     console.log("File downloaded to " + dImg);
//     compressFile(dImg, function(cImg) {
//       console.log("File saved to " + cImg);
//       uploadFile(cImg, function(UImgUrl) {
//         console.log("File uploaded to " + UImgUrl);
//         console.log("Task completed");
//       });
//     });
//   });

//Nesting
//Method-1
// const promise1=downloadFile("http://google.com/logo.png");
// promise1.then( function(dImg) {
//         console.log("File downloaded to " + dImg);
//         const promise2= compressFile(dImg);
//        promise2.then(function(cImg) {
//         console.log("File saved to " + cImg);
//         const promise3=uploadFile(cImg);
//         promise3.then(function(UImgUrl) {
//             console.log("File uploaded to " + UImgUrl);
//             console.log("Task completed");
//           });
//        });
// });

// //Nesting Method-2
// downloadFile("http://google.com/logo.png").then( function(dImg) {
//         console.log("File downloaded to " + dImg);
//          compressFile(dImg).then(function(cImg) {
//         console.log("File saved to " + cImg);
//         uploadFile(cImg).then(function(UImgUrl) {
//             console.log("File uploaded to " + UImgUrl);
//             console.log("Task completed");
//           });
//        });
// });


//   const promise=downloadFile("http://google.com/logo.png", function(dImg) {
//     console.log("File downloaded to " + dImg);
//     compressFile(dImg, function(cImg) {
//       console.log("File saved to " + cImg);
//       uploadFile(cImg, function(UImgUrl) {
//         console.log("File uploaded to " + UImgUrl);
//         console.log("Task completed");
//       });
//     });
//   });
  //dropbox
  // Uploading to: http://pep/uploads
  // File successfully uploaded to: http://pep/uploads/logo-resized.png
  // File compressed to: C:\Downloads\logo-resized.png
  