var arr=[1,2,3,4,5];
function multiplier(x,y){
    return x*y;
}
var res=arr.reduce(multiplier);//return compose of two input of an array
console.log(res);

