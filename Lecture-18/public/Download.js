
    const download=document.getElementById("down-tool");

    download.addEventListener("click",function(e){
        var dataURL = board.toDataURL("image/png");
        const anchor=document.createElement("a");
        anchor.download="filename.png";
        anchor.href=dataURL;
        anchor.click();
        anchor.remove();
        
      // // set canvasImg image src to dataURL
      // // so it can be saved as an image
      // document.getElementById('canvasImg').src = dataURL;


    })