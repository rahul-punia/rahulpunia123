let isMouseDown = false;
var undostack=[];
var redostack=[];

board.addEventListener("mousedown", function (e) {
//    ctx.translate(0,0);
//    ctx.scale(1,1);
//    drawAgain();
//starting point
    ctx.beginPath();
    let x=e.clientX;
    let y=e.clientY-board.getBoundingClientRect().y;
    ctx.moveTo(x,y);
    isMouseDown = true
    //x,y,start
   let point={
       x:x,
       y:y,
       color:ctx.strokeStyle,
       width:ctx.lineWidth,
       type:"start"
   }
   undostack.push(point);
   socket.emit("mymousedown",point);
})

board.addEventListener("mousemove", function (e) {
    if (isMouseDown==true) {
        // console.log(ctx);
        let x=e.clientX;
        let y=e.clientY-board.getBoundingClientRect().y;
       
        ctx.lineTo(e.clientX, e.clientY-board.getBoundingClientRect().y);
        ctx.stroke();
        // x,y end
        let point={
            x:x,
            y:y,
            color:ctx.strokeStyle,
            width:ctx.lineWidth,
            type:"end"
        }
        undostack.push(point);
        socket.emit("mymousemove",point);
    }
})
board.addEventListener("mouseup", function (e) {
    isMouseDown = false;
    // ctx.closePath();
    socket.emit("mymouseup");
})
const undo=document.getElementById("undo-tool");
let interval=null;
undo.addEventListener("mousedown",function(e){
    redostack=[];
  let myfn=function(){
    // if(undostack.length>=1){
        redostack.push(undostack.pop());
        drawAgain();
    //   }
      
  }
  interval=setInterval(function(){
      myfn();
  },50);
  });

  undo.addEventListener("mouseup",function(){
      clearInterval(interval);
  });
function drawAgain(){
    ctx.clearRect(0,0,board.width,board.height);
    for(var i=0;i<undostack.length;i++){
        if(undostack[i].type=="start"){
            ctx.lineWidth=undostack[i].width;
            ctx.strokeStyle=undostack[i].color;
    
            ctx.beginPath();
            ctx.moveTo(undostack[i].x,undostack[i].y);
       
        }else if(undostack[i].type=="end"){
            ctx.lineWidth=undostack[i].width;
            ctx.strokeStyle=undostack[i].color;
    
            ctx.lineTo(undostack[i].x, undostack[i].y);
             ctx.stroke();
    }}}
    


// let interval1=null;
const redo=document.getElementById("redo-tool");

redo.addEventListener("mousedown",function(e){
    let myfn=function(){
      if(redostack.length>=1){
          undostack.push(redostack.pop());
          drawAgain();
        //   console.log("rahul");
        }
    }
    interval=setInterval(function(){
        myfn();
    },50);
    });
  
    redo.addEventListener("mouseup",function(){
        clearInterval(interval);
    });
  

   const zoomin=document.getElementById("zoomin-tool");
   zoomin.addEventListener("mousedown",function(e){
       ctx.scale(1.1,1.1);
       ctx.translate(-50,-30);
       drawAgain();
     })
     const zoomout=document.getElementById("zoomout-tool");
     zoomout.addEventListener("mousedown",function(e){
        ctx.scale(0.9,0.9);
        ctx.translate(50,30);
        drawAgain();
      })

     
      window.addEventListener('resize', resizeCanvas, false);

      function resizeCanvas() {
        board.width = window.innerWidth;
        board.height = window.innerHeight;
    
        // Redraw everything after resizing the window
        drawAgain();
      }
      resizeCanvas();


