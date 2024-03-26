import React from "react"
import { Component } from "react";
import Testing2 from "./testing2";
import FunctionalComponent from "./FunctionalComponent";


class Testing extends React.Component{
    render(){
        return(
            <div>
                <p> Testing React Js</p>
                <h1>Second</h1>
                <Testing2 name="Mounika"/>
                <Testing2 name="Manu"/>
                <Testing2 name="Akhi"/>
                <FunctionalComponent age="29" Gender="Female"/>
                <FunctionalComponent age="26" Gender="Male"></FunctionalComponent>
            </div>
            // <Testing/>
        )
    }
}
export default Testing;