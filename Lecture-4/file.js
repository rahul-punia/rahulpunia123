var ajax = require("./lib/filedownload"); //ajax-library
//***************************************
var files = ["file1", "file2", "file3"];

var tracker={}; //create an object
function getFile(file) {
  ajax.fakeAjax(file, function(data) {  //fakeAjax function of ajax-library
// what do we do here?
console.log("Incoming File "+file+" "+data); //show real occurance of file
arrangeInorder(file,data);
  });
}
function arrangeInorder(file,data){
tracker[file]=data; //first store data

for(var i=0;i<files.length;i++){
if(tracker[files[i]]==undefined){ //file donot come
    return;
}else{
    if(tracker[files[i]]!=true){
        console.log(files[i]+" : "+tracker[files[i]]); //print/receive file in sorted order
        tracker[files[i]]=true; //show file is printed/send/executed
    }
}
}
}
// request all files at once in "parallel"
//print as soon as you receive them
// print them in seqential order
getFile("file1");
getFile("file2");
getFile("file3");
//output
// Requesting: file1
// Requesting: file2
// Requesting: file3
// The first  file's data
// The second file's data
// The third file's data 
// Complete

