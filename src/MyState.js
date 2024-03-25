import { Component } from "react";


class MyState extends Component{
    //state Start
    state={
        // rollno=10, //not Allowed because of "="
        name:"Mounika", // allowed only " : "
        number:1234567890
    }
    //start end
    
    //state 2 start
    state1={
        mouni:[
            {Name:'Mounika',add:"cpl",id:1},
            {Name:'Mouni',add:"hyd",id:2},
            {Name:'Manu',add:"mdd",id:3},
            {Name:'Akhila',add:"lb nagra",id:4},
        ]
    }
    //state 2 end
    
    render(){
        //console
        console.log(this.state.name)

        //SetInterval start
        setInterval(() => {
            this.setState({
                name:"codegnana"
            })
        }, 3000);
        //SetInterval End

       
        return(
           
            <div>
              
                {/* <p>My state </p> */}
                {/* <p>Name: React Js</p> */}
                {/* ================ */}
                <p>this.state.name</p>
                <p>this.state.number</p>

                <p>{this.state.name}</p>
                <p>{this.state.number}</p>
                {console.log(this.state.number)}
                {console.log(this.state.mounika)}
                <p>
                    {/* //state2 start */}
                    Name:{this.state1.mouni[0].Name} add:{this.state1.mouni[0].add} 
                    Name:{this.state1.mouni[1].Name} add:{this.state1.mouni[1].add} 
                    Name:{this.state1.mouni[2].Name} add:{this.state1.mouni[2].add} 
                    Name:{this.state1.mouni[3].Name} add:{this.state1.mouni[3].add} 
                    {console.log(this.state.mouni)}
                    {/* //state 2 end */}
                </p>
            </div>
        )
    }

}
export default MyState ;