var readline=require("readline");
var reader=readline.createInterface({  //createInterface is a method
    input:process.stdin,        //define input kha se lena hai here we take input from console(.stdin)
    output:process.stdout,      //define output kha se lena hai here we take output from console(.stdout)
    prompt:"mycli>"             //promt show a symbol before input
});
console.clear(); //clear console and reach at the top of console
reader.prompt();
reader.on("line",function(data){
    console.log("Did you said "+data);
    reader.prompt(); // to show prompt sign to user again and again
})

reader.on("close",function(){  //press ctr+c for closing 
    console.log("Thank you for using our cli");
})