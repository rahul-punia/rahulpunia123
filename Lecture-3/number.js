//Write a function which accept three input two numbers x,y and a function (fn).Number function applies function)fn
//to x & y and return the result
//

//small function
function sum(x,y){
    return x+y;
}

function mul(x,y){
    return x*y;
}
function diff(x,y){
    return x-y;
}
function divide(x,y){
    return x/y;
}

//using small function make large function
function number(x,y,cb){
    var ans=cb(x,y);
    console.log(`OUTPUT: ${ans}`);
}

number(3,4,sum);
number(3,4,mul);
number(3,4,diff);
number(10,5,divide);
