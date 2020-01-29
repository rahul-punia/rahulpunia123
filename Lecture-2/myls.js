#!/usr/bin/env node

console.log(__dirname); //give current file path
console.log(process.cwd());  //process.currentworkingdirectory


var fs=require("fs");
const dirfolders=fs.readdirSync(process.cwd()); //It reads directory simply and we convert in to array
console.log(dirfolders);
for(var i=0;i<dirfolders.length;i++){
    console.log(dirfolders[i]);
}