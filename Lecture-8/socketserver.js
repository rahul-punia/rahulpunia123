//require=>socket.io
const socket=require("socket.io");
const http=require("http");
//http server
const server=http.createServer(function(req,res){});

//socket=> socket enabled
const socketServer=socket(server);

socketServer.on("connect",function(socket){
    //Do all major work here
    console.log(socket.id);
    socket.on("myevent",function(data){
        console.log(data);
    });
});

server.listen(3000,function(){
    console.log("server is listening at port 3000");
})
// Socket.IO enables real-time event-based communication between 
// one or more clients and a server. It works on every platform, 
// browser or device and is fast and reliable. It's often used in 
// analytics, document collaboration, streaming and instant messaging.

// Socket.IO is smart, it uses WebSockets if available. If not it fails 
// over to something the browser does support. It's easy to setup and use
//  so let's take a look!

// In this tutorial we'll cover setting up a basic Express.js application 
//with Socket.IO. We'll create a simple chat server and show the basics on 
//how a client and server works. If you like to take a look at the code it's up on Github.