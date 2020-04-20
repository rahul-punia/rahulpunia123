// #!/usr/bin/env node

// js is a Dynamically typed

//primitive type-int ,boolean,null,undefined
// var variable="rahul";
// variable=true;
// variable=null;
// variable=50;
// console.log(variable);

// for(var i=1;i<=10;i++){
//     console.log(i);
// }

//fizzbuzz
// var v1=20;
// var print=console.log;
// for(var i=1;i<=20;i++){
//     if(i%3==0 && i%5==0){
//         print("fizzbuzz");
//     }else if(i%3==0){
//         print("fizz");
//     }else if(i%5==0){
//         print("buzz");
//     }else{
//        print(i);
//     }
// }

//Array => collection of anything
// var arr=[1,
//     1.1,
//     true,
//     null,
//     "steve",
//     undefined,
//      [1,2,3,4],
//      function fninsideArray(){
//          console.log("fn inside array");
//      },
//      {name:"steve"
//     }
// ];
// console.log(arr[6][2]);
// arr[7]();

//object-> {name:value}

// var cap={
//     firstname:"steve",
//     lastname:"punia",
//     age:21,
//     friends:["ram","shyam","akshay"],
//     address:{
//         state:"new york",
//         city:"california",
//         },
//         sayHi:function(){
//             console.log("cap say Hi");
//         }
// };

// console.log(cap);
// //value=>property
// console.log(cap.firstname);

// //functions inside object called method
// cap.sayHi();

//decimal to binary

// function d2b(decimal){
//     var binary=0;
//     var pv=1;
//     while(decimal>0){
//         var fv=decimal%2;
//         binary=binary+fv*pv;
//         pv=pv*10;
//         decimal=Math.floor(decimal/2);
//     }
//     return binary;
// }
// console.log(d2b(13));


var fs=require("fs");
//var os=require("os");  //get capability to talk with os
// console.log(os.arch());//output-64
//input
console.log(process.argv);
const dir=process.argv[2];

//File system
// if(dir==undefined){
//     console.log("Kindly enter directory name");
//     return;
// }
// if(fs.existsSync(dir)==true){
//     console.log("Directory already Exist");
//     return;
// }

// fs.mkdirSync(dir);
// console.log("Directory"+dir+" has been created");

//multipleDirectory
// for(var i=1;i<=50;i++){
//   fs.mkdirSync(dir+i);
// }

for(var i=1;i<=50;i++){
fs.rmdirSync(dir+i);
}
