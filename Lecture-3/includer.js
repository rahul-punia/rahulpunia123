

var arr=[1,2,3,4,5,6,7];

function isOdd(x){
    return x%2==1;
}

function includer(cb,arr){
    var narr=[];
    for(var i=0;i<arr.length;i++){
        if(cb(arr[i])==true){
            narr.push(arr[i]);
        }
    }
    return narr;
}

var narr=includer(isOdd,arr);
console.log(arr);
console.log(narr);

//this also implemented using inbuilt fun arr.filter(cbname); 