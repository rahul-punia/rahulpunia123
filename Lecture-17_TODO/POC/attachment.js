const liArr=document.getElementsByTagName("li");
const option1=liArr[0];
const Option2=liArr[1];
const Option3=liArr[2];

option1.addEventListener("click",function(){
    option1.style.backgroundColor="red";
})

Option2.addEventListener("click",function(){
    Option2.innerHTML=`<h1>OPTION2 WAS Clicked<p>some more html</p></h1>`;
})
Option3.addEventListener("click",function(){
    alert("Option3 will be removed.")
    Option3.remove();
})