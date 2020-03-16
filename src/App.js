import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import About from './pages/About'
import Services from './pages/Services'
import NoMatch from './pages/NoMatch'




/*
//Notes:
In React, components can be created using 'Function Components'
or by using ES6-Classes.

- Function Components: are basically components written in JavaScript-functions
- ES6 Class-Components: are built-in classes within the 'ES6'-Version of JavaScript

This project uses 'Function Components' to define it's components because this 
method () allows, 'class-declarations' to be hoisted.
*/


/*
Notes: This page hosts the routes btw paths and webpages
So basically this file holds the 'Router'  component
*/

// const byPropKey = (propertyName, value) => () => ({
//   [propertyName]: value,
// });


class App extends React.Component {
  

  render() {
    
    // if(localStorage.loggedIn=='true'&&this.state.userLoggedIn==false)
    // {
    //   let loginData = JSON.parse(localStorage.loginData)
    //   this.setState({
    //     userLoggedIn: true,
    //     storeID: loginData._id,
    //     email: loginData.email, 
    //     stockedItems: [],
    //     price: null,
    //     category:''
    //   })
    // }
    
    return (
      
      <div>

{/* 
        <AppNavbar
          userLoggedIn={this.state.userLoggedIn}
          setUserLoggedIn={this.setUserLoggedIn}
        /> */}
        <Switch >
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route component={NoMatch} />
        </Switch>

    
      </div>


    );
  }
}

export default App;