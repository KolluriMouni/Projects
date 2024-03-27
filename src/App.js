import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"
import Class from './components/class';
import Testing from './Testing';
// import Testing2 from './testing2';
import MyState from './MyState';
// import FunctionalComponent from './FunctionalComponent';
import ListClass from './ListClass';
import FragementElement from './FragmentElement'
import Form from './Form';


// import {Browserrouter,Routers,Router} Form 'react-Router-dom';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

import Events from './Events';


// import class, { Component } from './Component/Class'
function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes >
        </BrowserRouter>
        
        <Events/>
    
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

        <table border="1">
        <tr ClassName="data">
          <FragementElement/>
        </tr>
        <tr>
          <FragementElement/>
        </tr>
      </table>
        
        <class/>
        {/* My state */}
        <p>MyState Class</p>
        <MyState/> 
        <ListClass/>
        <FragementElement/>
        <Form/>

        <Testing/>
        {/* <Testing2/> */}
        <liste/>
      </header>
    </div>
  )
}

export default App1;
