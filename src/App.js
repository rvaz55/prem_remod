import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent'
import { Switch, Route } from 'react-router-dom';


/*
//Notes:
In React, components can be created using 'Function Components'
or by using ES6-Classes.

- Function Components: are basically components written in JavaScript-functions
- ES6 Class-Components: are built-in classes within the 'ES6'-Version of JavaScript

This project uses 'Function Components' to define it's components because this 
method () allows, 'class-declarations' to be hoisted.
*/


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Logo header</h1>
      </header>

      <FirstComponent displaytext = "First Comp. Data"/>

      <Switch>
        <Route exact path="/" component= {}/>
        <Route/>

      </Switch>


      <footer>Copyright &copy; Pre-RemMod.com. </footer>


    </div>
  );
}

export default App;
