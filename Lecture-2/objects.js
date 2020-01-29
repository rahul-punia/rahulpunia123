var print=console.log;
var cap={
    firstname:"steve",
    lastname:"punia",
    age:21,
    friends:["ram","shyam","akshay"],
    address:{
        state:"new york",
        city:"california",
        },
        sayHi:function(){
            console.log("cap say Hi");
        },
        key:"some value"
};
//Get=> .operator,[]
//set=> .operator
cap.movies=["Don","dabang","krissh"]; //set
cap.age=40; //update
print(cap);
print("----------------------------------");
//delete pair
delete cap.key;
console.log(cap);

// see used in  for in loop
var age="firstname";
console.log(cap[age]);//treat age as variable
console.log(cap.age);// here treat age as constant key and match literally on lhs of cap object

//Get using []
// for(var key in cap){  //for in loop
//     console.log(key+" : "+cap[key]); //cap[key] here key act as variable key
// }

// for(var key in cap){
//     console.log(key+" : "+cap["key"]); //cap["key"] or cap.key both match literally i.e search key in  LHS OF cap
// }

// for(var key in cap){
//     console.log(key+":"+cap["key"]);
// }

//GET 
// //.operator or[""]-check literraly in object

print(cap.firstname);
print(cap.friends);

// //[]=>
// print(cap["firstname"]);   //check literraly in object
// // print(cap["lastname"]);

