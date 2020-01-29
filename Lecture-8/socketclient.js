//require=>socket.io-client
const client=require("socket.io-client");

//first http request
const socket=client.connect("http://localhost:3000");//emit connect event
// console.log("rahul2")
// setInterval(function(){
setTimeout(function(){
    socket.emit("myevent","client has just joined");
},5000);