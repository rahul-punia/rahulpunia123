
var arr1=[1,2,3];
var arr2=[100,2,1,10];
//we make arr2 as union of arr1 and arr2
for(var i=0;i<arr1.length;i++){
   if(arr2.includes(arr1[i])==false){
       arr2.push(arr1[i]);
   }
}
console.log(arr2);