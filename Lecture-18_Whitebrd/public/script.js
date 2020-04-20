// console.log(SocketIO);
const socket = io.connect('http://localhost:3000');
// const socket = client.connect("http://localhost:3000");
const board = document.querySelector(".board");
board.height = window.innerHeight;
board.width = window.innerWidth;
// canvasRenderingContext2d=> tool
const ctx = board.getContext("2d");
// ctx.fillRect(0, 0, window.innerWidth / 2, window.innerHeight / 2);
// ctx.fillStyle = "red";
// // initialX,initialY,finalX,finalY
// ctx.fillRect(0, 0, window.innerWidth / 2, window.innerHeight / 2);
// ctx.strokeStyle = "green";
// ctx.lineWidth = 10;
// ctx.strokeRect(0, 0, window.innerWidth / 2, window.innerHeight / 2);
ctx.strokeStyle = "blue";
ctx.imageSmoothingEnabled = true
const input = document.querySelector("#pen-size");
ctx.lineWidth = input.value;
input.addEventListener("change", function (e) {
    ctx.lineWidth = input.value;

})
// ctx.lineWidth=2;
let Activetool = "pencil";
const pencilOptions = document.querySelector(".pencil");
const eraserOptions = document.querySelector(".eraser");


function handleToolChange(tool) {
    if (tool == "pencil") {
        if (Activetool == "pencil") {
            // show options
            pencilOptions.classList.add("show");
        } else {
            Activetool = "pencil";
            ctx.globalCompositeOperation="source-over";
            // remove other options
            eraserOptions.classList.remove("show");
            ctx.strokeStyle = "blue";
            console.log(ctx);
        }
    } else if (tool == "eraser") {
        if (Activetool == "eraser") {
            // show options
            eraserOptions.classList.add("show")
        } else {
            ctx.globalCompositeOperation="destination-out";
            Activetool = "eraser";
            pencilOptions.classList.remove("show");
            // ctx.strokeStyle = "white";
            // remove other options
            // set yourself active
            // change style
        }
    }
    else if (tool == "sticky") {
        createSticky();
        
    }
}
function handleColorChange(color) {
    ctx.strokeStyle = color;
}












// const board=document.querySelector(".board");
// board.height=window.innerHeight;
// board.width=window.innerWidth;

// const ctx=board.getContext("2d");
// // ctx.fillRect(0,0,window.innerWidth/2,window.innerHeight/2);//to draw on page(to implement)
// // ctx.fillStyle="red";
// // ctx.fillRect(0,0,window.innerWidth/2,window.innerHeight/2);//to draw on page(to implement)
// // // set property
// // ctx.strokeStyle="green";
// // ctx.lineWidth=10;
// // ctx.strokeRect(0,0,window.innerWidth/2,window.innerHeight/2); //to draw on page(to implement)

// ctx.strokeStyle="blue";
// ctx.beginPath();
// ctx.moveTo(50,150);
// ctx.lineTo(100,150);
// ctx.moveTo(160,200);
// ctx.lineTo(200,200);
// ctx.closePath();
// ctx.stroke();