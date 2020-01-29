var arr=[1,
    1.1,
    true,
    null,
    "steve",
    undefined,
     [1,2,3,4],
     function fninsideArray(){
         console.log("fn inside array");
     },
     {name:"steve"
    }
];

// //22 dec //prove array is also an object in js i.e there is no array in js
// arr["9"]="some value";
// arr["some value"]="something";
// for(var key in arr){
// console.log(key+" : "+arr[key]);
// }


console.log(arr);
arr[95]="some value";
console.log(arr.length);  //donot give error at arr.length

//Array Methods
//1.Add first
arr.unshift("First value");
console.log(arr);
// //2.Remove First
arr.shift();
console.log("------------------------");
console.log(arr);
// //3.Add Last
arr.push("ram");
console.log(arr);
// //4.Remove last value
arr.pop();
// arr.pop();
console.log(arr);
// console.log(arr[96]);
// //5.slicemethod work like substring in java
var slicearr=arr.slice(4,7);
console.log(slicearr);
console.log("----------------------");
console.log(arr);  //donot change actual array

// // 6.splicemethod change actual array by deleting elements 
var splicearr=arr.splice(6,2);
console.log(splicearr);
console.log(arr);  //change actual array