//Library
//case-1 export only last function i.e greeter
// module.exports=function sayHi(){
//     console.log("Hi all");
// };
// // return;
// module.exports=function greeter(){
//     console.log("Greeting to all");
// };


//case-2 two export both function add function as method/property
// Library 
// module.exports.sayHi=function(){
//     console.log("Hi all");
// };
// // return;
// module.exports.greeter=function(){
//     console.log("Greeting to all");
// };

// for(var i=0;i<=10;i++){
//     console.log(i);
// }
//Memory map
//point-1 Initially oth point to same memory allocation
console.log(module.exports);//print empty object
console.log(exports);       //print empty object

//point-3.Node.js export only module.exports not export
// module.exports=function sayHi(){
//     console.log("Hi All");
// };

// exports=function greeter(){
//     console.log("greeting to all");
// };

//point2-both point to same memory allocation so both export
exports.greeter=function(){
console.log("Greeting to All");
};
module.exports.sayHi=function(){
    console.log("Hi All");
};