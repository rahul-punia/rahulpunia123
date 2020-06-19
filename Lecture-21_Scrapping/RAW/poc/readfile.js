const fs=require("fs");
const cheerio=require("cheerio");
let html=fs.readFileSync("../fact/index.html","utf-8");
console.log(html);

let $=cheerio.load(html);
//to select element from the page
let p=$("p");
//to get text
let pkaData=p.text();
console.log(pkaData);

//return array of all elements 
let a=$("a");
//print content of all anchor
console.log(a.text());

//select element that is inside another element
let ulkap=$("ul p");
console.log(ulkap);

//to select element using class
let classEle=$(".first-para");
console.log(classEle.text());