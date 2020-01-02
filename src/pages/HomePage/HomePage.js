
import React, { Component } from 'react';
import { Link } from 'react-router-dom'


function HomePage() {
    return (
      <div className = "hmpgDiv">

          <p>
            This is the 'Homepage' Page.
          </p>

          <Link to="/Services"> Services</Link>
     
  
      </div>
    );
  }
  
  export default HomePage;