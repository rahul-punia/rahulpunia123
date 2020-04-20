let isemiitedMouse=false;
socket.on("mymousedown",function(point){
    isemiitedMouse=true;
    ctx.beginPath();

    let x = point.x;
    let y = point.y - board.getBoundingClientRect().y;
     ctx.strokeStyle=point.color;
    ctx.lineWidth=point.width;
    ctx.moveTo(x, y);
   
   
})
socket.on("mymousemove",function(point){
    if (isemiitedMouse == true) {
        // console.log(ctx);
      let  x = point.x;
       let  y = point.y - board.getBoundingClientRect().y
       ctx.strokeStyle=point.color;
       ctx.lineWidth=point.width;
        ctx.lineTo(x, y);
       ctx.stroke();
      }

})
socket.on("mymouseup",function(){
    isemiitedMouse = false;
})
