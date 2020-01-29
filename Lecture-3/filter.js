var arr=[1,2,3,4,5,6,7];

function isOdd(x){
    return x%2==1;   //return true or false
}

var farr=arr.filter(isOdd);   //if true then add in narr
console.log(arr);
console.log(farr);