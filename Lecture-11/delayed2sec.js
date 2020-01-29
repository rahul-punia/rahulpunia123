// Change Async in to sync code using  await
function delayBy2sec(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("I will give answer in 2second");
        },2000);
    });
};

console.log("before async function");

async function helper(){    //await work inside async function
    console.log("before code");
    const answer=await delayBy2sec();
    console.log(answer);
    console.log("After code");
}
helper();
console.log("After async Function");