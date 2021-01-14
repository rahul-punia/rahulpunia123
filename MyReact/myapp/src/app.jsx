//imrc
import React, { Component } from 'react';
import TaskList from './components/taskList'
import InputBox from './components/inputBox'
//cc
//jsx Internally call constructor and super constructor
class App extends Component {
    state={
        taskList:[{task:"Learn EC",id:1},{task:"Learn JS ES6",id:2},{task:"Learn React",id:3}]
    }

    handleDelete=(dtask)=>{
        console.log(dtask);
        let remtask=this.state.taskList.filter((elem)=>{return elem.task!==dtask;})
        this.setState({taskList:remtask});
    }
    handleAddTask=(addtask)=>{
        let {taskList}=this.state;
        taskList.push({task:addtask,id:taskList.length+1});

        this.setState({taskList:taskList});
    }
    render() { 
        // const {taskList}=this.state;
        return (
            <React.Fragment>
            <InputBox  handleAddToIBC={this.handleAddTask}></InputBox>
           <TaskList taskList={this.state.taskList} handleDeleteToTLC={this.handleDelete}></TaskList>
           </React.Fragment>
        );
    }
}
 
export default App;