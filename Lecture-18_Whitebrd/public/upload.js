const imageupload=document.querySelector(".image-upload");
const imgPicker=document.getElementById("img-picker");

imgPicker.addEventListener("click",function(e){
    imageupload.click();//call change event on imageupload
// The click() method simulates a mouse-click on an element.
//This method can be used to execute a click on an element as if the user manually clicked on it.
})

imageupload.addEventListener("change",function(e){
//The change event occurs when the value of an element has been changed (only works on <input>, 
//<textarea> and <select> elements). The change() method triggers the change event, or attaches a function to run when a change event occurs. Note: For select menus, the change event occurs when an option is selected.
// const src=imageupload.value;
// console.log(imageupload.files[0]);
 const img=document.createElement("img");

//  img.setAttribute("class",style1);
const ImageData=imageupload.files[0];//idx=0 contain file
//The files property of an input element returns a FileList.
// Assuming this is an input element, this.files[0] returns a File object at the index 0.
img.src=URL.createObjectURL(ImageData);// create url

console.log(img.src);
const body=document.querySelector("body");
body.appendChild(img);
img.onload=function(){
    URL.revokeObjectURL(img.src);
}
})
//The URL.revokeObjectURL() static method releases an existing object URL which was
// previously created by calling URL.createObjectURL(). Call this method when you've 
//finished using an object URL to let the browser know not to keep the reference to the file any longer.
