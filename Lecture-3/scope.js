
//Find output 
//ques-1
// var myvar=1;
// function a(){
//     console.log(myvar);
// }
// function b(){
//     var myvar=2;
//     console.log(myvar);
//     a();
// }
// console.log(myvar);
// b();

//ques-2
var myvar=1;
function a(){
    console.log(myvar);
}
function b(){
    // var myvar=2;
    console.log(myvar);
    a();
}
console.log(myvar);
myvar=3;
b();