var chalk=require("chalk");
var figlet=require("figlet");
var readline=require("readline");
 var print =console.log;
console.log(chalk.blue(figlet.textSync("Tasker")));
console.log(chalk.cyan("( Type a command (Type help to see the list of commands )"));
var reader=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt:">"
});
console.clear();
reader.prompt();
var tasks=[];

reader.on("line",function(data){


    var cmd=data.split(" ")[0];
    var sArr=data.split(" ");
    sArr.shift();
    if(cmd=="help"){
        print(`Available commands:
               1. add task_name
               2. ls(to list all tasks):
               3. delete id(enter task id to delete it)`);
    // console.log("Available commands:");
    // console.log("1. add task_name");
    // console.log("2. ls(to list all tasks):");
    // console.log("3. delete id(enter task id to delete it)");
    }else if(cmd=="add" && sArr.length>0){
     tasks.push(sArr.join(" "));
    }else if(cmd=="ls"){
      for(var i=0;i<tasks.length;i++){
          print(`${i+1}.${tasks[i]}`);
      }
    }else if(cmd=="delete" && sArr.length>0){
       var id=Number.parseInt(sArr[0]);
    //    tasks.splice(id-1,1);
       var tarr=[];
       for(var i=0;i<tasks.length;i++){
           if(i+1!=id){
               tarr.push(tasks[i]);
           }
           tasks=tarr;
       }
    }else{
        print(chalk.red("Wrong command"));
    }
    reader.prompt();
})

reader.on("close",function(){
    console.log("Thank you for using our cli");
})


