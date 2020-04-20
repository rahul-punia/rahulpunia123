//Browser or client side
const socket = io.connect('http://localhost:3000');
// const socket = io.connect('http://localhost/3000');  //Wrong url
const d=document;
const inputBox=d.getElementById("inputBox");
const sendBtn=d.getElementById("sendBtn");
const chatList=d.querySelector(".chat-list");
//client1
sendBtn.addEventListener("click",function(){
    const text=inputBox.value;
    if(text==""){
        return;
    }
    const li=d.createElement("li");
    li.style.listStyle="none";
    li.textContent=`You:${text}`;

    chatList.appendChild(li);
    inputBox.value="";

    const message=`Steve:${text}`;
    socket.emit('message',message);
})
//for other clients
socket.on("broadcast",function(message){
const li=d.createElement("li");
li.style.listStyle="none";
li.textContent=message;
chatList.appendChild(li);
})