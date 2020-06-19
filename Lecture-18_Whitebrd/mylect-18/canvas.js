const board=document.getElementById("canvas");
const ctx=board.getContext("2d");//object to render changes on canvas(board)
var isMouseDown=false;

board.height=window.innerHeight;
board.width=window.innerWidth;

function handletoolchange(tool){
  if(tool=="pencil"){
    ctx.strokeStyle=blue;
  }else{
    ctx.strokeStyle="white";
  }
}

board.addEventListener("mousedown",function(e){
  ctx.beginPath();
  const x=e.clientX;
  const y=e.clientY;
  console.log(x+" "+y);
  ctx.moveTo(x,y);
 isMouseDown=true;
})

board.addEventListener("mousemove",function(e){
    
    if(isMouseDown){
    const x=e.clientX;
    const y=e.clientY;
  console.log(x+" "+y);
    ctx.lineTo(x,y);
    ctx.strokeStyle="red";
    ctx.stroke();
    }
})

board.addEventListener("mouseup",function(){
    isMouseDown=false;
})