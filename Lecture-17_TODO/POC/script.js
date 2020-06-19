//class=> .myclass
//id=> #myid
//tag =>tagname
//document=>globally 
const body=document.querySelector("body");
// CRUD
//CREATE
const h1=document.createElement("h1");
h1.textContent="Hi Element Created Through JS";
body.appendChild(h1);
h1.style.color="red";