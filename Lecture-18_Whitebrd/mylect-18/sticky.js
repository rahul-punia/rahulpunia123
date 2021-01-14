let parent;

function createSticky(){
    const body=document.querySelector("body");
    // console.log("createsticky");
    let stickyPad=document.createElement("div");
    let navbar=document.createElement("div");
    let writingPad=document.createElement("div");
    let close=document.createElement("div");
    let minimize=document.createElement("div");
    let textArea=document.createElement("textarea");
    
    stickyPad.setAttribute("class","stickyPad")
    navbar.setAttribute("class","navbar");
    writingPad.setAttribute("class","writingPad");
    close.setAttribute("class","close");
    minimize.setAttribute("class","minimize");
    textArea.setAttribute("class","textArea");
    close.classList.add("symbol");
    minimize.classList.add("symbol");

    stickyPad.appendChild(navbar);
    stickyPad.appendChild(writingPad);
    navbar.appendChild(close);
    navbar.appendChild(minimize);
    writingPad.appendChild(textArea);
    body.appendChild(stickyPad);
    // console.log("createsticky2");
   
    parent=stickyPad;

    let isclick=true;
    minimize.addEventListener("click",function(){
        if(isclick){
            writingPad.style.display="none";
        }else{
            writingPad.style.display="block";
        }
        isclick=!isclick;
    })

    close.addEventListener("click",function(){
        stickyPad.remove();
    })
}

// module.exports=createSticky;