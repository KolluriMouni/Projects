import React from "react";
import { Component } from "react";
// import FunctionalComponent from "./FunctionalComponent";


class Testing2 extends React.Component{
    render(){
        console.log(this.props)
        return(

            <div>
                <h1>Hi I am Child  props </h1>
                {/* <p>Testing222</p> */}
                <p>{this.props.name}</p>
               
             


                
           
            </div>
        )
    }
}
export default Testing2;