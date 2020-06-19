const socket=require("socket.io");
const http=require("http");

const server=http.createServer(function(){});
//socket enable
const socketserver=socket(server);
var db={};
socketserver.on("connect",function(socket){
//   console.log(socket.id);
  socket.on("Joined",function(message){
    db[message.username]=socket.id;
    // console.log(data);
      socket.broadcast.emit('notice', message.data);
  });
  socket.on("mymessage",function(message){
    // console.log(message.data);
    if(message.type=="private"){
    // sending to individual socketid (private message)
   socketserver.to(`${db[message.receiver]}`).emit("notice",message.data);
      }else{//public
     // sending to all clients except sender
        socket.broadcast.emit('notice',message.data);
    }
    
});
});
server.listen(3000,function(){
    console.log("server is listening at port 3000");
});