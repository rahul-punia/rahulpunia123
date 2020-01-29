function downloadfile(url){
    console.log("Downloading file from: "+url);
    var path="C:\\Downloads\\";
    var img=url.split("/").pop();
    var dimg=path+"\\"+img; //download image
    return new Promise(function (resolve,reject){
        setTimeout(function(){   // here function is function definition but downloaded called by
            resolve(dimg);
        },3000); //delay of 3 sec 
    });
}
//client code
var promise=downloadfile("http://google.com/logo.png");
promise.then(function downloaded(dimg){
    console.log("File saved to "+dimg);
});
promise.catch(function(err){
    console.log(err);
})
// downloadfile("http://google.com/logo.png",downloaded);
