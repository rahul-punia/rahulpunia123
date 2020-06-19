//functions are variables
//pass a variable as a parameter to a function
//pass a function as aparameter to a function
function myfun(param){
    console.log(param);
    let rval=param();
    console.log(rval);
}


// myfun(10);
// myfun("sdfjsdhfsdjhfjsdh");
// myfun(true);
// myfun([1,2,3,4,5]);

myfun(function smallfun(){
    let a=10;
    a++;
    console.log("I am small fun");
    return a;
})