// const body=document.querySelector("body");
// const h1=document.createElement("h1");
// setTimeout(func2000);
// h1.textContent="My name is Rahul";
// body.appendChild(h1);
// h1.style.color="red";

// const p=document.createElement("p");
// p.textContent="jkhdshcdsjhcdsjhchsdjhcsdjchjscjhsdcjhsdjhcskhcjsdcdhsjchsdjcdschjsdchsdcmnamc,.mavdfjvfdvh";
// p.style.color="green";
// body.appendChild(p);

const liArr=document.getElementsByTagName("li");
const option1=liArr[0];
const option2=liArr[1];
const option3=liArr[2];
// console.log(liArr);

option1.addEventListener("click",function(){
    option1.style.backgroundColor="red";
})
option2.addEventListener("click",function(){
    option2.innerHTML="<h1>option2 was clicked</h1>";
})
option3.addEventListener("click",function(){
    alert("option3 is removed");
    option3.remove();
})