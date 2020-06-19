import React, { Component } from 'react';
const TaskList=(props)=>{  //Arrow functional component 
    const {taskList,handleDeletetoTLC}=props;

    return ( <React.Fragment>
        <ul className="tasks">
            {taskList.map((elem)=>{
                return <li key={elem.id} onClick={()=>{handleDeletetoTLC(elem.task)}}>{elem.task}</li>
            })}
        </ul>
      </React.Fragment> );
}

export default TaskList;