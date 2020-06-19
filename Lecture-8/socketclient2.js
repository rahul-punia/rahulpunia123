const client=require("socket.io-client");
const socket=client.connect('http://localhost:3000');

setInterval(function(){
    socket.emit('message1',"Hi rahul");
    socket.on('message2',function(data){
        console.log(data);
    })
},1000);