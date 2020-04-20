const spanDetector=document.getElementById("span-detector");

window.addEventListener("load",function(){
    const clients=["EveryOne","Fitness Freaks","Vegans","Developers"];
    typeWriter(spanDetector,clients);
})

function typeWriter(spanDetector,clients){
let txt="";
let wordIndex=0;
let isDeleting=false;

function typer(){
    let wait=300;
    wordIndex=wordIndex%clients.length;
    const word=clients[wordIndex];
    if(isDeleting==true){
    txt=word.substring(0,txt.length-1);
    }else{
    txt=word.substring(0,txt.length+1);
    }
    spanDetector.textContent=txt;
    const largerpause=3000;

    // if (isDeleting == true && txt == "") {
    //     wordIndex++;
    //     isDeleting = false;
    //   }  else if(isDeleting==false&&txt.length==word.length){
    //     wait = largerPause;
    //     isDeleting=true;
    //   }
    if(isDeleting==true && txt==""){
        wordIndex++;
        isDeleting=false;
    }else if(isDeleting==true && txt.length==word.length){
        isDeleting=false;
        wait=largerpause;
    }else if(isDeleting==false && txt.length==word.length){
        isDeleting=true;
    }
    

    setTimeout(function(){
        typer();
    },wait);
}
typer();
}