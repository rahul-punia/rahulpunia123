//server code
function downloadfile(url,downloaded){
    console.log("Downloading file from: "+url);
    var path="C:\\Downloads\\";
    var img=url.split("/").pop();
    var dimg=path+"\\"+img; //download image
    setTimeout(function(){   // here function is function definition but downloaded called by
        downloaded(dimg)
    },3000); //delay of 3 sec 
}
//client code
function downloaded(dimg){
    console.log("File saved to "+dimg);
}
downloadfile("http://google.com/logo.png",downloaded);
//input-
//url="http://google.com/logo.png"
//output:
//Downloading file from: http://google.com/logo.png
//File saved to C:\Downloads\\logo.png    //print after 3 sec