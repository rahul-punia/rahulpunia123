const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
// ctx.fillStyle="red";
// ctx.fillRect(10,10,350,350);


    // ctx.fillRect(25, 25, 100, 100);
    // ctx.clearRect(45, 45, 60, 60);
    // ctx.strokeRect(50, 50, 50, 50);

    ctx.lineWidth=5;
    ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(200,75); //(w,h)
    // ctx.lineTo(100, 25);
    //set line color
    ctx.strokeStyle="red";
    ctx.stroke();
    // ctx.fill();


    // ctx.beginPath();
    // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    // ctx.moveTo(65, 65);
    // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    // ctx.stroke();