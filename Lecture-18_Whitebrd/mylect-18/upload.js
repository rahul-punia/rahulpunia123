const imageupload=document.querySelector(".image-upload");
const imgPicker=document.querySelector("#img-picker");

imgPicker.addEventListener("click",function(){
    imageupload.click();
})
imageupload.addEventListener("change",function(e){
    const img=document.createElement("img");
    img.setAttribute("class","img-upload");
    const ImageData=imageupload.files[0];
    img.src=URL.createObjectURL(ImageData);

    console.log(img.src);
    const body=document.querySelector("body");
    body.appendChild(img);
    img.onload=function(){
        URL.revokeObjectURL(img.src);
    }
})