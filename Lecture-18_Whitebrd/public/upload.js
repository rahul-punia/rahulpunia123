const imageupload=document.querySelector(".image-upload");
const imgPicker=document.getElementById("img-picker");

imgPicker.addEventListener("click",function(e){
    imageupload.click();
})

imageupload.addEventListener("change",function(e){
// const src=imageupload.value;
// console.log(imageupload.files[0]);
 const img=document.createElement("img");

//  img.setAttribute("class",style1);
const ImageData=imageupload.files[0];
img.src=URL.createObjectURL(ImageData);

console.log(img.src);
const body=document.querySelector("body");
body.appendChild(img);
img.onload=function(){
    URL.revokeObjectURL(img.src);
}
})

