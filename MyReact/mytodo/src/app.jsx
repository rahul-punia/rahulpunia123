import React, { Component } from 'react';
import TaskList from './components/taskList';
import InputBox from './components/InputBox';

class App extends Component {
    state = {
        taskList:[{task:"Learn JS ES6",id:1},{task:"Learn React",id:2},{task:"Leacn EC this",id:3}]
    }

    handleDelete=(dtask)=>{
        console.log(dtask)
        let remtask=this.state.taskList.filter((elem)=>{return elem.task!==dtask;});
        this.setState({taskList:remtask});
    }
    handleAdd=(addtask)=>{
        const {taskList}=this.state;
        taskList.push({task:addtask,id:taskList.length+1});
        this.setState({taskList:taskList});
    }

    render() { 
        return (
        <React.Fragment>
        <InputBox handleAddToIBC={this.handleAdd}></InputBox>
        <TaskList taskList={this.state.taskList} handleDeleteToTl={this.handleDelete}></TaskList>
        </React.Fragment>
            );
    }
}
 
export default App;