const socket=require("socket.io");
const http=require("http");
const server=http.createServer((res)=>{});
const socketserver=socket(server);
socketserver.on('connect',function(socket){
    socket.on('message1',function(data){
        console.log(data);
    socket.emit('message2',"Hello");
    })
})

server.listen("3000",function(){
    console.log("server is started");
})