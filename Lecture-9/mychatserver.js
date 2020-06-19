const socket=require("socket.io");
const http=require("http");
const db={};
const server=http.createServer();
const socketserver=socket(server);

socketserver.on('connect',function(socket){
    console.log(socket.id);
    socket.on("joined",function(message){
        // console.log(message.data);
        db[message.username]=socket.id;
        socket.broadcast.emit("notice",message.data);
    })
    socket.on("mymessage",function(message){
      if(message.type=='private'){
        console.log("pr "+message.data);
        socketserver.to(`${db[message.receiver]}`).emit('notice',message.data);
        // socketserver.to(`${db[message.receiver]}`).emit("notice",message.data);
      }else{
        console.log(message.data);
        socket.broadcast.emit("notice",message.data)
      }
    });
});
server.listen("3000",()=>{
    console.log("server is listening at port 3000");
})
