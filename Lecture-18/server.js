const express=require('express');
const app=express();

//1
const server=require('http').Server(app);
//2
var io=require('socket.io')(server);
app.use(express.static('public'));

io.on("connection",function(socket){
    console.log(socket.id);
    socket.on("mymousedown",function(point){
     socket.broadcast.emit("mymousedown",point);
    })
    socket.on("mymousemove",function(point){
        socket.broadcast.emit("mymousemove",point)
    })
    socket.on("mymouseup",function(point){
        socket.broadcast.emit("mymouseup");
    })
});
// app.get("*",function(req,res){
//     res.end("<h1>404 page not found</h1>");
// })
// app.get("/getData",function(req,res){
    // res.end("<h1>express responding</h1>");
// })
server.listen(3000,function(){
    console.log("server is listening at port 3000");
})