var today=require("./commands/today");
var forecast=require("./commands/forecast");
var version=require("./commands/version");
var help=require("./commands/help");


const readline=require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:">>"  //come when use backspace(delete)
})
rl.on("line",(input)=>{
console.log(input);
const arr=input.split(" ");
const cmd=arr[0];
var location="";
// if(arr[2]!=undefined){
location=arr[2];
// }
// console.log(cmd+"  "+location);
if(cmd=="today"){
    if(location!=undefined)
    today(location);
    else
    today();
}else if(cmd=="forecast"){
    if(location!=undefined)
    forecast(location);
    else
    today();
}else if(cmd=="help"){
    help();
}else if(cmd=="version"){
    version();
}else{
    console.log("wrong command");
}
});

rl.on("close",function(){
    console.log("Thank you for using");
});