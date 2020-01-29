//Server code
function downloadFile(url, downloaded) {
    // We are downloading the file here
    console.log("Downloading file from: "+url);
    var path="C:\\Downloads\\";
    var img=url.split("/").pop();//Remove last
    var dimg=path+"\\"+img;
    setTimeout(function(){
        downloaded(dimg)
    },3000);
    // let's assume it takes 3 seconds to download
    // accepts url of image and callback which is called when downloading is done
  }
  
  function compressFile(filePath, compressed) {
    console.log("We are compressing:"+filePath);
    var ext=filePath.split(".").pop();//Remove last, split donot change actual array
    var path=filePath.split(".").shift();//Remove first
    var cimg=path+"-resized."+ext;
    
    setTimeout(function(){
        compressed(cimg)
    },2000);
    // let's assume it takes 2 seconds to compress
    //accepts  image filepath and callback which is called when compressesion is done
  }
 
  function uploadFile(diskPath, uploaded) {
    var uploadUrl = "http://pep/uploads";
    console.log("Uploading to:",uploadUrl);
    var img=diskPath.split("\\").pop();
    var uimg=uploadUrl+"/"+img;
    setTimeout(function(){
        uploaded(uimg)
    },3000);
    // We will upload this file, it takes 3 seconds,
    // let's assume it takes 3 seconds to upload
    //accepts  image filepath and callback which is called when uploading is done
  }

  //client code
  function downloaded(dimg){
    console.log("File saved to "+dimg);
    compressFile(dimg,compressed);
}
  function compressed(cimg){
    console.log("File compressed to:"+cimg);
    uploadFile(cimg,uploaded);  // call back function is called  in last
}
function uploaded(uimg){
    console.log("File successfully uploaded to:"+uimg);
    console.log("task complete");
}
  downloadFile("http://google.com/logo.png",downloaded);
// wrong call  compressFile("C:\Downloads\logo.png",downloaded);
// wrong call  uploadFile("http://pep/uploads",downloaded);

    //  input:
  // url:http://google.com/logo.png
  // output:
  // Downloading file from: http://google.com/logo.png
  // File saved to: C:\Downloads\logo.png

  // We are compressing: C:\Downloads\logo.png
  // File compressed to: C:\Downloads\logo-resized.png

  // Uploading to: http://pep/uploads
  // File successfully uploaded to: http://pep/uploads/logo-resized.png
  // Task completed