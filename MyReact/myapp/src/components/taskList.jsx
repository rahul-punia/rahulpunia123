import React, { Component } from 'react';

const TaskList = (props) => {
    const {taskList,handleDeleteToTLC}=props;
    return ( 
        <React.Fragment>
        <ul className="tasks">
        {taskList.map((elem)=>{
            return <li onClick={()=>{handleDeleteToTLC(elem.task)}}>{elem.task}</li>;
        })}
        </ul>
    </React.Fragment>  
    );
}
 
export default TaskList;