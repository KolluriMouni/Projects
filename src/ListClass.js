import React from "react";
// import App1 from './App';
// import ListClass from './ListClass';

class List1 extends React.Component{
    state={
        employees:[
            {id:1, Name:"Java", Age:2020, Gender:"Male"},
            {id:2, Name:"JavaScript", Age:2000, Gender:"FeMale"},
            {id:1, Name:"JQuery", Age:1990, Gender:"Male"}
        ]
    }
    render(){
        console.log(this.state.employees)
        return(
            <div>
                <h3>list Class</h3><hr></hr>
                <h5>Name : {this.state.employees[0].Name}, Age : {this.state.employees[0].Age}, Gender : {this.state.employees[0].Gender} </h5>
                <h5>Name : {this.state.employees[1].Name}, Age : {this.state.employees[1].Age}, Gender : {this.state.employees[1].Gender} </h5>
                <h5>Name : {this.state.employees[2].Name}, Age : {this.state.employees[2].Age}, Gender : {this.state.
                employees[2].Gender} </h5>
                {
                this.state.employees.map((emp)=>(
                    <div key={emp.id}>
                        <h3>MAP</h3>
                    <p>Name: {emp.Name}</p>
                    <p>Age: {emp.Age}</p>
                    <p>Gender{emp.Gender}</p>
                    </div>
                ))
                }
            </div>
            
        )
    }
}
export default List1;