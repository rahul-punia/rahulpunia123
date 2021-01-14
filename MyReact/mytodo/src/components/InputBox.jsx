import React, { Component } from 'react';

class inputBox extends Component {
    state = {
        data:""
    }
    changeText=(e)=>{
        const value=e.currentTarget.value;
        this.setState({data:value});
    }
    handleSubmit=()=>{
        this.props.handleAddToIBC(this.state.data);
        this.setState({data:""});
    }
    render() { 
        return ( 
            <React.Fragment>
                <input
                value={this.state.data}
                 onChange={this.changeText}
                type="text"/>
                <button onClick={this.handleSubmit}>submit</button>
            </React.Fragment>
         );
    }
}
 
export default inputBox;