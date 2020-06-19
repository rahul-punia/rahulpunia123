
import React, { Component } from 'react';
import TaskList from './components/taskList'
import InputBox from './components/inputBox';

class  App extends Component {
    state = { 
        taskList:[{task:"Make Cofee",id:1},{task:"Drive Car",id:2},{task:"Do Job",id:3}]
     }
     handleDelete=(todeleteTask)=>{
         function test(elem){
             return elem.task!==todeleteTask;
         }
         let restofTheTasks=this.state.taskList.filter(test);
         this.setState({taskList:restofTheTasks});
     }
     handleAddTask=(toAddTask)=>{
        let {taskList}=this.state;
     taskList.push({
       task:toAddTask,
       id:taskList.length+1
     })
     this.setState({taskList:taskList})
    } 

    render() { 
        return (
            <React.Fragment>
                <InputBox handleAddtoIBC={this.handleAddTask}></InputBox>
                <TaskList taskList={this.state.taskList} handleDeletetoTLC={this.handleDelete}></TaskList>
            </React.Fragment>
        )   
    }
}
 
export default App;
//  JSX (JavaScript Extension), is a React extension which allows writing
//  JavaScript code that looks like HTML. In other words, JSX is an HTML-like 
//  syntax used by React that extends ECMAScript so that HTML-like syntax can 
//   co-exist with JavaScript/React code.