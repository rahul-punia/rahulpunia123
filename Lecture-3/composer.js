var arr=[1,2,3,4,5];
function multiplier(x,y){
    return x*y;
   }

function add(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}

function composer(cb,arr){
    var res=1; //identity element
for(var i=0;i<arr.length;i++){
    res=cb(res,arr[i],"*");
}
return res;
}

var res=composer(multiplier,arr);
console.log(res);

//this also implemented using arr.reduce(cbname) inbuilt function