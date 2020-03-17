let parent;
function createSticky(){
const body = document.querySelector("body");

const StickyPad = document.createElement("div");
const navbar = document.createElement("div");
const writingPad = document.createElement("div");
const close = document.createElement("div");
const minimize = document.createElement("div");
const textarea = document.createElement("textarea");


StickyPad.setAttribute("class", "sticky-pad")
navbar.setAttribute("class", "navbar")
writingPad.setAttribute("class", "writingPad")
close.setAttribute("class","colors");
minimize.setAttribute("class","colors");
textarea.setAttribute("class","textarea");
minimize.classList.add("minimize");
close.classList.add("close");
StickyPad.appendChild(navbar);
StickyPad.appendChild(writingPad);
navbar.appendChild(close);
navbar.appendChild(minimize);
writingPad.appendChild(textarea);
body.appendChild(StickyPad);

parent=StickyPad;
let flag=true;
minimize.addEventListener("click",function(){
    if(flag){
     writingPad.style.display="none";
    }else{
      writingPad.style.display="block";
    }
    flag=!flag;
})
close.addEventListener("click",function(){
StickyPad.remove();
})
addListeners();
}

function addListeners(){
let isMDown=false; 
let intialx;
let intialy; 
parent.addEventListener("mousedown",function(e){
isMDown=true;
intialx=e.clientX;
intialy=e.clientY;
});

parent.addEventListener("mousemove",function(e){
    if(!isMDown)
    return;
    let finalx=e.clientX;
    let finaly=e.clientY;
    let diffx=finalx-intialx;
    let diffy=finaly-intialy;

    const {x,y}=parent.getBoundingClientRect();
    parent.style.top=y+diffy+"px";
    parent.style.left=x+diffx+"px";

    intialy=finaly;
    intialx=finalx;
})
parent.addEventListener("mouseleave",function(e){
    isMDown=false;
})
}
