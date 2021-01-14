const Download=document.querySelector("#img-down");

Download.addEventListener("click",function(e){
    var dataURL=board.toDataURL("image/png");
   
    const anchor=document.createElement("a");
    anchor.download="filename.png";
// The download property sets or returns the value of the download attribute of a link.
// The download attribute specifies that the target will be downloaded when a user clicks on the hyperlink.
    anchor.href=dataURL;
    anchor.click();
    anchor.remove();
})