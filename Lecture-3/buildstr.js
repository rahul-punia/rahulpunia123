// Que Build string using map function  first character of each string of array

var animals = ['Hen','elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// function firstchar(str){
//     return str.split("");
// }

// function makestr(arr){
//      var nstr="";
//     for(var i=0;i<arr.length;i++){
//       var sarr=firstchar(arr[i]);
//       nstr+=sarr[0];
//     }
//     return nstr;
// }

// var nstr=makestr(animals);
// console.log(nstr);

//Method-2
function getfchar(str){
  return str.charAt(0);
}

var arrstr=animals.map(getfchar);
console.log(arrstr);
var nstr=arrstr.join("");
// for(var i=0;i<arrstr.length;i++){
// nstr+=arrstr[i];
// }
console.log(nstr);
