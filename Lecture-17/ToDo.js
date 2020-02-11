const input=document.querySelector("input");
const button=document.querySelector("button");
const ul=document.querySelector("ul");
const form=document.querySelector("form");

(function getTaskFromLS(){
    if(localStorage.getItem("TaskList")!=null){
         const taskArr=JSON.parse(localStorage.getItem("TaskList"));
         for(let i=0;i<taskArr.length;i++){
              addOneTask(taskArr[i]);
         }
    }
})();
//current target=>Where we attach Event Listner
function addOneTask(task){
     const li=document.createElement("li");
     li.setAttribute("class","task");
     li.innerHTML=`<p class="task mr-4">${task}</p class=""> 
     <img src="cross.png" alt="">`
     
     ul.appendChild(li);
     const img=li.querySelector("img")
     img.addEventListener("click",removeTask);
   
}

form.addEventListener("submit",function(e){
     e.preventDefault();
     const task=input.value;
    
     // add Task To local Storage
     addOneTask(task);
     addTasktoLs(task);
     input.value="";
     
})

function removeTaskFromLS(task){
     if(localStorage.getItem("TaskList"==null)){
      return;
     }else{
          const STaskList=localStorage.getItem("TaskList");
        const TaskList=JSON.parse(STaskList);
     
        for(var i=0;i<TaskList.length;i++){
             if(TaskList[i]==task){
             TaskList.splice(i,1);
             }
        }
     //    TaskList.pop(task);
        localStorage.setItem("TaskList",JSON.stringify(TaskList));
     }
}



function addTasktoLs(task){
     if(localStorage.getItem("TaskList")==null){
          const TaskList=[task];
          localStorage.setItem("TaskList",JSON.stringify(TaskList));
     }else{
        const STaskList=localStorage.getItem("TaskList");
        const TaskList=JSON.parse(STaskList); //convert in to an object form
        TaskList.push(task);
        localStorage.setItem("TaskList",JSON.stringify(TaskList));
     }
}

function removeTask(e){
     const rtask=e.target.parentElement.firstChild.textContent;
     removeTaskFromLS(rtask.trim());
     e.target.parentElement.remove()
}
// const img=document.querySelector
// img.addEventListener("click",removeTask);


