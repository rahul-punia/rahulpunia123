const form=document.querySelector("form");
const input=document.querySelector("input");

// localStorage.clear();

(function getTaskFromLs(){
    if(localStorage.getItem("TaskList")!=null){
        const taskArr=JSON.parse(localStorage.getItem("TaskList"));
        console.log(taskArr.length);
        for(var i=0;i<taskArr.length;i++){
            // console.log(taskArr[i]);
            addOneTask(taskArr[i]);
        }
    }
})();

form.addEventListener("submit",function(e){
    // e.preventDefault();
    const task=input.value;
   input.value=null;
   if(task!=null){
   addOneTask(task);
   addTaskToLs(task);
   }
})

function addOneTask(task){
    const alltask=document.querySelector(".alltask");
    let li=document.createElement("li");
    li.textContent=`${task}`;
    
    let img=document.createElement("img");
    img.setAttribute("src","../img/cross.png");
    img.className="task-img";
   

    li.appendChild(img);
    li.className="task"; // li.setAttribute(className,"task");
   
    alltask.appendChild(li);
    img.addEventListener("click",removeTask);
}

function addTaskToLs(task){
    if(localStorage.getItem("TaskList")==null){
        const TaskArr=[task];
        localStorage.setItem("TaskList",JSON.stringify(TaskArr)); //set in {key:value} form because localStorage is a object where  value is an array
    }else{
     const STaskArr=localStorage.getItem("TaskList");
     const TaskArr=JSON.parse(STaskArr);
     TaskArr.push(task);
    //  console.log(task);
    //  sTasklist[sTasklist.length]=task;
    //  console.log(sTasklist[sTasklist.length]);
    localStorage.setItem("TaskList",JSON.stringify(TaskArr));
    }
}

function removeTask(e){
    const rtask=e.target.parentElement.firstChild.textContent;
    removeTaskFromLs(rtask.trim());
    e.target.parentElement.remove();
}

function removeTaskFromLs(task){
    console.log("r12="+task);
    if(localStorage.getItem("TaskList")==null){
    return;
    }else{
        const STaskArr=localStorage.getItem("TaskList");
        const TaskArr=JSON.parse(STaskArr);
     
        for(var i=0;i<TaskArr.length;i++){
            if(TaskArr[i]==task){
                TaskArr.splice(i,1);
                localStorage.setItem("TaskList",JSON.stringify(TaskArr));
                break;
            }
        }
   }
}