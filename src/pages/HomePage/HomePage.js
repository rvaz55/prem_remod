
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../components/Main';
import FirstComponent from '../../components/FirstComponent';



function HomePage() {
    return (
      <div >

          <p>
            This is the 'Homepage' Page.
          </p>

          <Link to="/Services"> Services</Link>

        <Main>dcadc</Main>

        <FirstComponent></FirstComponent>
      
  
      </div>
    );
  }
  
  export default HomePage;