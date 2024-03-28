import React from "react";

class Events2 extends React.Component{
    state={
        username:"",
        passcode:""
    }
    // save=(e)=>{
    //     // alert()
    //     console.log(e.target.value)
    //     this.setState({
    //         username:e.target.value
    //     })
    // }
    // password=(e)=>{
    //     // alert()
    //     console.log(e.target.value)
    //     this.setState({
    //         passcode:e.target.value
    //     })
    // }
    handleChange=(e)=>{
        this.setState({
            // username:e.target.value,
            // passcode:e.target.value
            [e.taget.name]:e.taget.value
        })
    }
    handleClick=()=>{
        console.log(this.state.username,this.state.passcode)
    }

    render(){
        return(
            <div>
                <h2>Multiple Value using one function </h2>
                <input 
                    name="username" 
                    type="text" 
                    placeholder="Enter usename" 
                    onChange={this.handleChange}/>
                <input 
                    name="passcode" 
                    placeholder="Enter password" 
                    onChange={this.handleChange}/>
                <p>Username: {this.state.username}</p>
                <p>Password: {this.state.passcode}</p>
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
} 
export default Events2;