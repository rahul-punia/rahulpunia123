




// const a=10;
// //console.log(this);//This=> window object 

// function myfun(){
//     console.log(this)
// }

// // myfun();

// const myobj={
//     name:"steve",
//     sayHi:function(){
//         // console.log(`${this.name} says Hi`);  //use current object => Output=> steve says Hi
//         function inner(){
//             console.log(this);
//         }
//         inner();
//     }
// }

const a=10;
//console.log(this);//This=> window object 

function myfun(){
    console.log(this)
}

// myfun();

const myobj={
    name:"steve",
    sayHi:function(){
        console.log(`${this.name} says Hi`);  //use current object => Output=> steve says Hi
        const inner=()=>{
            // console.log(this);
        }
        inner();
    }
}

myobj.sayHi();