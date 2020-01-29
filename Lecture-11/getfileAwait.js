var ajax = require("../Lecture-10/lib/filedownload");
//***************************************
var files = ["file1", "file2", "file3"];

var tracker = {};
function getFile(file) {
    return new Promise(function(resolve,reject){
      ajax.fakeAjax(file, function(data) {
        // what do we do here?
        resolve(data);
        console.log("Incoming File " + file + " " + data);
      });
    });
    // arrangeInOrder(file, data);
}
// function arrangeInOrder(file, data) {
//   tracker[file] = data;
//   // order check=>
//   for (var i = 0; i < files.length; i++) {
//     if (tracker[files[i]] == undefined) {
//       return;
//     } else {
//       if (tracker[files[i]] != true) {
//         console.log(files[i] + " : " + tracker[files[i]]);
//         tracker[files[i]] = true;
//       }
//     }
//   }
// }
// request all files at once in "parallel"
//print as soon as you receive them
// print them in seqential order
 var p1=getFile("file1");
 async function helper(){
    var p1=getFile("file1");
    var p2= getFile("file2");
    var p3= getFile("file3");
    const filedata1=await p1;
    const filedata2=await p2;
    const filedata3=await p3; 
    console.log("file 1 "+filedata1);
    console.log("file 2 "+filedata2);
    console.log("file 3 "+filedata3);
 } 
 
 helper();
//  p1.then(function(data){
//   console.log("file 1 "+data);
//   return p2;
// }).then(function(data){
//   console.log("file 2 "+data);
//   return p3;
// }).then(function(data){
//   console.log("file 3 "+data);
  
// });
