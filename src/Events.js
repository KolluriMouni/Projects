import React from "react";

class Events extends React.Component{
    state={
        username:"",
        passcode:""
    }
    save=(e)=>{
        // alert()
        console.log(e.target.value)
        this.setState({
            username:e.target.value
        })
    }
    password=(e)=>{
        // alert()
        console.log(e.target.value)
        this.setState({
            passcode:e.target.value
        })
    }
    render(){
        return(
            <div>
                <input placeholder="Enter usename" onChange={this.save}/>
                <input placeholder="Enter password" onChange={this.password}/>
                <p>{this.state.username}</p>
                <p>{this.state.passcode}</p>
            </div>
        )
    }
} 
export default Events;