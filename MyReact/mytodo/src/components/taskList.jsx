import React, { Component } from 'react';

const TaskList = (props) => {
    const {taskList,handleDeleteToTl}=props;
    return ( 
        <React.Fragment>
            <ul className="tasks">
            {taskList.map((elem)=>{return <li onClick={()=>{handleDeleteToTl(elem.task)}}>{elem.task}</li>})}
            </ul>
        </React.Fragment>
     );
}
 
export default TaskList;