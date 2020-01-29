var fs=require("fs");
//var os=require("os");
// console.log(os.arch());
//input
console.log(process.argv);
const dir=process.argv[2];
//File system

//Make directory 1-50 folders
// for(var i=1;i<=50;i++){
//   if((dir+i)==undefined){
//     console.log("Kindly enter directory name");
//     return;
// }
// if(fs.existsSync(dir+i)==true){
//     console.log("Directory already Exist");
//     return;
// }

// fs.mkdirSync(dir+i);
// console.log("Directory"+dir+i+" has been created");

// }

//Remove directory
for(var i=1;i<=50;i++){
    fs.rmdirSync(dir+i);
}