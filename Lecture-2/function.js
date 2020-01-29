//function statement
function sayHi(){
    console.log("I say Hi");
}
sayHi();

//function expresion
var greater=function(){
    console.log("Hi I am a function expression");
};
greater();

//IIFEE=> Immeadiately Invoked Function expression
(function(){
    console.log("Board has been created as soon as page is loaded");
})();