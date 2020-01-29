//Write a transformer function that accept doubleIt
//function and multiply every element by 2 without mutating actual array

var arr=[1,2,3,4,5,6];

function doubleIt(x){
    return 2*x;
}

function transformer(arr,cb){
    var narr=[];
    for(var i=0;i<arr.length;i++){
      narr.push(cb(arr[i]));
    }
    return narr;
}

var tarr=transformer(arr,doubleIt);
console.log(arr);
console.log(tarr);

//this also implemented using inbuilt function arr.map(cbname);