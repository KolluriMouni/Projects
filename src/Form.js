import React from "react";

class Form extends React.Component{
    state={
    user:"",
    password:""
    }
    handleInputValu=(e)=>{
        // alert("Hi i get Called by Onchange Event")
        this.setState({
            // user:e.target.value
            [e.target.name]:e.target.value
        })
    }
    handleFormData=(e)=>{
        e.preventDefault();
        alert(this.state.user+" "+ this.state.password)
    }
    render(){
        return(
            <div>
                <h3>Form</h3><hr></hr>
                <form onSubmit={this.handleFormData}>
                    <input 
                        name="user"
                        type="text"
                        value={this.state.user}
                        placeholder="Enter Name"
                        onChange={this.handleInputValue}/>

                    <input 
                        name="password"
                        type="text"
                        value={this.state.password}
                        placeholder="Enter password"
                        onChange={this.handleInputValue}/>
                        
                        <button>Submit</button>
                </form>

            </div>
        )
    }
}
export default Form;