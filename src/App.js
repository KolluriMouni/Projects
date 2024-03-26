import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"
import Class from './components/class';
import Testing from './Testing';
// import Testing2 from './testing2';
import MyState from './MyState';
// import FunctionalComponent from './FunctionalComponent';


// import class, { Component } from './Component/Class'
function App1() {
  return (
    <div className="App">
      <header className="App-header">
    
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>lorem React Js</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href="https://codegnan.com/">home</a>
        <a href="https://codegnan.com/">React Js</a>
        {/* Class Js */}
        <p>My Class Js React Js</p>
        
        <class/>
        {/* My state */}
        <p>MyState Class</p>
        <MyState/> 

        <Testing/>
        {/* <Testing2/> */}
      </header>
    </div>
  )
}

export default App1;
