const client=require("socket.io-client");
const readline=require("readline");
const socket=client.connect("http://localhost:3000");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  var username="";
  reader.question('Enter your name:', function(answer) {
    // TODO: Log the answer in a database
    console.log(`Hello  ${answer}`);
    username=answer;
    var message={};
    message.type="joining";
    message.username=username;
    message.data=`${answer} has joined`;
    socket.emit("Joined",message);
    // rl.close();
  });
  reader.on("line",function(data){
      var type=data.split(" ")[0];
      var message={};
      if(type=="private"){
          message.type="private";
          message.receiver=data.split(" ")[1];
          message.data=data.split(" ").slice(2).join(" ");
      }else{
        message.type="public";
        // message.receiver=data.split(" ")[0];
        message.data=username+":"+data;
      }
      socket.emit("mymessage",message);
  });
   socket.on("notice",function(message){
       console.log(message);
   });
// setInterval(function(){
//     socket.emit("myevent","my name is rahul")},2000
// );