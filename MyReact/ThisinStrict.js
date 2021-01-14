"use strict"

console.log(this); //window object

function fun(){
    console.log(this);   //current object
}

fun();

// const myobj={
//         name:"steve",
//         sayHi:function(){
//             console.log(`${this.name} says Hi`);  //use current object => Output=> steve says Hi
//             function inner(){
//                 console.log(this);
//             }
//             inner();
//         }
//     }

//     myobj.sayHi()


const myobj={
    name:"steve",
    sayHi:function(){
        console.log(`${this.name} says Hi`);  //use current object => Output=> steve says Hi
        const inner=()=>{
            console.log(this);
        }
        inner();
    }
}

myobj.sayHi();