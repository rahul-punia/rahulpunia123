//ques-1 Find Output
// function buildfunctions(){
//     var arr=[];
//     for(var i=0;i<3;i++){
//       arr.push(function(){
//         console.log(i);
//       })
//     }
//     return arr;
// }

// var fs=buildfunctions();
// fs[0]();
// fs[1]();
// fs[2]();

//ques-2 Find Output
// // function buildfunctions(){
// //   var arr=[];
// //   for(var i=0;i<3;i++){
// //     arr.push(function(){
// //       console.log(i);
// //       //return i;
// //     }()
// //     )
// //   }
// //   return arr;
// // }

// // var fs=buildfunctions();
// console.log(fs);//print undefined
//ques-3 Find Output
function getData(num, cb) {
    setTimeout(function() {
      cb(num);
    }, 1000);
  }
  getData(10, function(num1) {   //callback hell-callback ma callback ko cb hell kahte hai
    var x = 1 + num1;
    console.log(x);
    getData(30, function(num2) {
      var y = 1 + num2;
      console.log(y);
      getData(x + y, function(answer) {
        console.log(answer);
      });
    });
  });
//OR 2nd method of code writing
function getData(num, cb) {
  setTimeout(function() {
    cb(num);
  }, 1000);
}
var x;
function getx(num1){
   x = 1 + num1;
  console.log(x);
  getData(30, gety); //call internally when getx execute completely
}
function gety(num2){
  var y = 1 + num2;
  console.log(y);
  getData(x+y,getxy);  //call internally when getxy execute completely
}
function getxy(answer){
  console.log(answer);
}
getData(10,getx);

//Find output
//server code
// function downloadfile(url,downloaded){
//   console.log("Downloading file from: "+url);
//   var path="C:\\Downloads\\";
//   var img=url.split("/").pop();
//   var dimg=path+"\\"+img; //download image
//   setTimeout(function(dimg){   // here function(dimg) is function definition but downloaded called by message queue which donot
//       downloaded(dimg)         // pass dimg so dimg is undefined. If we donot take dimg as argument in function defination
//   },3000); //delay of 3 sec    //then it take dimg value from closure i.e outer variable of inside function
// }
// //client code
// function downloaded(dimg){
//   console.log("File saved to "+dimg);
// }
// downloadfile("http://google.com/logo.png",downloaded);
//input-
//url="http://google.com/logo.png"
//output:
//Downloading file from: http://google.com/logo.png
//File saved to C:\Downloads\\logo.png    //print after 3 sec