// Creation is a two step processs
//1.Hoisting-1.Memory allocation and initilization 2.Execution

//find output
//ques-1
// console.log(variable);
// var variable;
// sayHi();
// greet();
// //function statement
// function sayHi(){
//     console.log("I would run");
// }

// //function expression
// var greet=function(){
//     console.log("Hello All");
// };


//ques-2
// console.log(variable);
// var variable=10;

// console.log(variable);
// sayHi();
// greet();
// //function statement
// function sayHi(){
//     console.log("I would run");
// }

// //function expression
// var greet=function(){
//     console.log("Hello All");
// };


//ques-3
// console.log(variable);
// var variable=10;

// console.log(variable);

// //function statement
// function sayHi(){
//     console.log("I would run");
// }

// //function expression
// var greet=function(){
//     console.log("Hello All");
// };
// sayHi();
// greet();


//ques-4
console.log(variable);
console.log(greet); //give undefined b/z greet variable assign to undefined during step.1 hoisting
var variable=10;

console.log(variable);

//function statement
function sayHi(){
    console.log("I would run");
}

//function expression
var greet=function(){
    console.log("Hello All");
};
sayHi();
greet();