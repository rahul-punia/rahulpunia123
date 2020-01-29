var DoubleQuotes="   I am A, String   ";
var variable=10;
var SingleQuotes="  I am A string "+variable;
var templateLiteral=` I am a 
                      String ${variable}`;

console.log(templateLiteral);
console.log(SingleQuotes);
console.log(DoubleQuotes);
//trim
var trimmedString=DoubleQuotes.trim();

//important
//split and convert in to array
var strArr=trimmedString.split(" ");

//important
//join use in browser for searching ex-I+am+A+String
var joinedArr=strArr.join("+");

console.log("ans--"+trimmedString);
console.log(strArr);
console.log(joinedArr);

// Replace
var newString=trimmedString.replace("I","we");
newString=newString.replace("am","are");
console.log(newString);

