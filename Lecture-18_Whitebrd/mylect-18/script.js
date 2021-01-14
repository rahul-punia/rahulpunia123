const board=document.getElementById("canvas");
const ctx=board.getContext("2d");//object to render changes on canvas(board)
// const createSticky=require("./sticky");

var isMouseDown=false;

board.height=window.innerHeight;
board.width=window.innerWidth;
ctx.lineWidth="5";

const pencilOptions = document.querySelector(".pencil");
const eraserOptions = document.querySelector(".eraser");
// const stickyOptions = document.querySelector(".sticky");

function handletoolchange(tool){
  if(tool=='pencil'){
    console.log("pencil");
    eraserOptions.classList.remove("show");//remove class
    // stickyOptions.classList.remove("show");//remove class
    pencilOptions.classList.add("show");//add class
    ctx.strokeStyle="orange";
  }else if(tool=="eraser"){
    console.log("eraser");
    pencilOptions.classList.remove("show");//add class
    // stickyOptions.classList.remove("show");//remove class
    eraserOptions.classList.add("show");//remove class
    ctx.strokeStyle="white";
  }else if(tool=="sticky"){
    console.log("sticky");
    eraserOptions.classList.remove("show");//remove class
    pencilOptions.classList.remove("show");//add class
    // stickyOptions.classList.add("show");//remove class
    // ctx.strokeStyle="white";
    createSticky();
  }else{
    // stickyOptions.classList.remove("show");//remove class
    eraserOptions.classList.remove("show");
    pencilOptions.classList.remove("show");
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
    // ctx.strokeStyle="red";
    ctx.stroke();
    }
})

board.addEventListener("mouseup",function(){
    isMouseDown=false;
})