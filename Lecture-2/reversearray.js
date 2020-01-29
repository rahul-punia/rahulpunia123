var arr1=[1,2,3,4,5];
var arr2=[];
var length=arr1.length; // b\z length changes when we remove or add element in array
// for(var i=0;i<length;i++){
//     var val=arr1.shift();  //remove first
//     arr2.unshift(val);     //add first
// }
//OR
for(var i=0;i<length;i++){
    var val=arr1.pop();      //remove last
    arr2.push(val);          //add last
}
console.log(arr2);