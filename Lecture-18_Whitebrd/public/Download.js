
    const Download=document.getElementById("down-tool");

    Download.addEventListener("click",function(e){
        var dataURL = board.toDataURL("image/png");
       // The HTMLCanvasElement.toDataURL() method returns 
       //a data URI containing a representation of the image 
       //in the format specified by the type parameter (defaults to PNG). The returned image is in a resolution of 96 dpi.
       // If the height or width of the canvas is 0 or larger than the maximum canvas size, the string "data:," is returned.     
        const anchor=document.createElement("a");
        anchor.download="filename.png";
// The download property sets or returns the value of the download attribute of a link.
// The download attribute specifies that the target will be downloaded when a user clicks on the hyperlink.
        anchor.href=dataURL;
        anchor.click();
        anchor.remove();
        
      // // set canvasImg image src to dataURL
      // // so it can be saved as an image
      // document.getElementById('canvasImg').src = dataURL;
    })