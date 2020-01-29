const readline = require('readline');
const client=require("socket.io-client");
//http server
const socket=client.connect("http://localhost:3000");//emit connect event
// console.log("rahul2")
// setInterval(function(){
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var username="";
reader.question('What is your name? ', (answer) => { //also do by function
  console.log(`Hello: ${answer}`);
   username=answer;
   var message={};
   message.type="joining";
   message.data=username+":"+"has joined";
   message.username=username;
    socket.emit("Joined",message);
});
reader.on("line",function(data){
  //private name hi
  var type=data.split(" ")[0];
  var message={};
  if(type=="private"){
  message.type="private";
  message.receiver=data.split(" ")[1];
  message.data=username+":"+data.split(" ").slice(2).join(" ");
  }else{
    message.type="public";
    // message.receiver=data.split(" ")[1];
  message.data=username+":"+data;
  }
  socket.emit("mymessage",message);
  });
socket.on("notice",function(message){
  console.log(message);
});

reader.on("close",function(){
  console.log("Thank you for using");
});

//Answer 1-5
// const readline = require('readline');
// const client=require("socket.io-client");
// //http server
// const socket=client.connect("http://localhost:3000");//emit connect event
// 
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// var username="";
// reader.question('What is your name? ', (answer) => { //also do by function
//   console.log(`Hello: ${answer}`);
//    username=answer;
//     socket.emit("Joined",`${answer} has joined`);
// });
// reader.on("line",function(message){
//   socket.emit("mymessage",username+":"+message);
// });
// socket.on("notice",function(message){
//   console.log(message);
// });

// reader.on("close",function(){
//   console.log("Thank you for using");
// });


