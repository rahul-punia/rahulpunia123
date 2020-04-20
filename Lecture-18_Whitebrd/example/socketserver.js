//serverside
const express = require('express');
//express server
const app=express();
//Nodejs
const server = require('http').Server(app);
//Make Nodejs=>socket enabled
const io = require('socket.io')(server);
// const path=require("path");
//serve static asset to client
app.use(express.static("clientDir"));

io.on('connection', function (socket) {
    socket.on("message",function(message){
        console.log(message);
        socket.broadcast.emit('broadcast',message);
    })
 });
//To send files that are outside clientDir folder
// app.get("/home",function(req,res){
//     res.sendFile(path.join(__dirname,"home.html"));
// })

//Nodejs server
server.listen(3000,function(req,res){
    console.log("Server is started at port 3000");
});
