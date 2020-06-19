import React, { Component } from 'react';

class InputBox extends Component {
    state = { 
        data:""
     }
     handleSubmit=()=>{
         this.props.handleAddtoIBC(this.state.data);
         this.setState({data:""});
     }
     changeText=(input)=>{
         let value=input.currentTarget.value;
         this.setState({data:value});
     }
    render() {
        return ( 
            <React.Fragment>
                <input onChange={this.changeText} value={this.state.data} type="text"/>
                <button onClick={this.handleSubmit}>Submit</button>
            </React.Fragment>
         );
    }
}
 
export default InputBox;
