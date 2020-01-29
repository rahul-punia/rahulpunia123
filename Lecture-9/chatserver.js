const socket=require("socket.io");
const http=require("http");
//http server
const server=http.createServer(function(req,res){});

//socket=> socket enabled
const socketServer=socket(server);
var db={};
socketServer.on("connect",function(socket){
    socket.on("Joined",function(message){
      db[message.username]=socket.id;
        socket.broadcast.emit("notice",message.data);
    });
    socket.on("mymessage",function(message){
      if(message.type=="private"){
        //io.to(`${socketId}`).emit('hey', 'I just met you');
         socketServer.to(`${db[message.receiver]}`).emit("notice",message.data);
      }else{
        socket.broadcast.emit("notice",message.data);
      }
    });
});


server.listen(3000,function(){
    console.log("server is listening at port 3000");
})




//Answer 1-5
// const socket=require("socket.io");
// const http=require("http");
// //http server
// const server=http.createServer(function(req,res){});

// //socket=> socket enabled
// const socketServer=socket(server);//pass http server through socket library

// socketServer.on("connect",function(socket){
//     socket.on("Joined",function(data){
//         console.log(data);
//         socket.broadcast.emit("notice",data);
//     });
//     socket.on("mymessage",function(message){
//       console.log(message);
//       socket.broadcast.emit("notice",message);
//     });
// });


// server.listen(3000,function(){
//     console.log("server is listening at port 3000");
// })