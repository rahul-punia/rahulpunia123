const client=require("socket.io-client");
const socket=client.connect("http://localhost:3000");

const readline=require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:">>"
})
var username="";
rl.question('What is Your Name?',(answer)=>{
    username=answer;
    console.log(`Hello ${answer}`);
    var message={};
    message.type="joining";
    message.data=`${answer} has joined`;
    socket.emit('joined',message);
})
rl.on('line',(input)=>{
     const type=input.split(" ")[0];
     var message={};
     if(type=="private"){
         message.type="private";
         message.receiver=input.split(" ")[1];
         message.data=username+":"+input.split(" ").slice(2).join(" ");
        console.log(message.type+" "+message.receiver+" "+message.data);
     }else{
         message.type="public";
        console.log(input);
         message.data=`${username}:${input}`;
     }
  socket.emit('mymessage',message);
});
socket.on("notice",(message)=>{
    console.log(message);
 });

rl.on("close",function(){
    console.log("Thank you for using");
});
