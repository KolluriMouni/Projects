import React from "react";

class Form extends React.Component{
    state={
    user:""
    }
    handleInputValu=(e)=>{
        // alert("Hi i get Called by Onchange Event")
        this.setState({
            user:e.target.value
        })
    }
    handleFormData=(e)=>{
        e.preventDefault();
        alert(this.state.user)
    }
    render(){
        return(
            <div>
                <h3>Form</h3><hr></hr>
                <form onSubmit={this.handleFormData}>
                    <input type="text"
                        name="user"
                        value={this.state.user}
                        placeholder="Enter Name"
                        onChange={this.handleInputValu}/>
                        
                        <button>Submit</button>
                </form>

            </div>
        )
    }
}
export default Form;