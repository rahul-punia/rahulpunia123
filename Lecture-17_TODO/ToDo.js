const input=document.querySelector("input");
const button=document.querySelector("button");
const ul=document.querySelector("ul");
const form=document.querySelector("form");
// localStorage.clear();
(function getTaskFromLS(){
    if(localStorage.getItem("TaskList")!=null){
         const taskArr=JSON.parse(localStorage.getItem("TaskList"));
         for(let i=0;i<taskArr.length;i++){
              console.log(taskArr[i]);
              addOneTask(taskArr[i]);
         }
    }
})();
//current target=>Where we attach Event Listner
function addOneTask(task){
     const li=document.createElement("li");
     li.setAttribute("class","task");
     li.innerHTML=`<p class="task mr-4">${task}</p class=""> 
     <img src="./img/cross.png" alt="">`
     
     ul.appendChild(li);
     //to remove task
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

function addTasktoLs(task){
     if(localStorage.getItem("TaskList")==null){
          const TaskList=[task];
          localStorage.setItem("TaskList",JSON.stringify(TaskList));
     }else{
        const STaskList=localStorage.getItem("TaskList");
        const TaskList=JSON.parse(STaskList); //convert in to an (js)object form
        TaskList.push(task);
        localStorage.setItem("TaskList",JSON.stringify(TaskList));
     }
}

function removeTask(e){
     const rtask=e.target.parentElement.firstChild.textContent;//parentElement is li
     removeTaskFromLS(rtask.trim());//remove from local storage
     e.target.parentElement.remove();//remove from screen
}

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


// const img=document.querySelector
// img.addEventListener("click",removeTask);


