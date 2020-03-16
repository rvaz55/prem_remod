import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Link} from "react-router-dom";



 export default class Main extends React.Component {

 

  render() {
    return (
      // const Header = props => (
      <div className='Main'>
<h1>sihvoshoiuhrsoh</h1>



        <div className="container-fluid-middle">
          <div className="row">
            <div className="col-1">
            </div>
            <div className="col-10">
              <h1 className="h2-responsive display-4 color-row">Connecting communities with local businesses </h1>
            </div>
            <div className="col-1">
            </div>

          </div>
        </div>


        <div className=" container-fluid vendor-title">

          <h1 className="display-4" >Using InStock is easy! </h1>

        </div>

        <Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>

        {/* <hr className="my-4" /> */}

      </div>
    )
  };
};


