import React, {Component} from 'react';




export default class FirstComponent extends React.Component {

// constructor(props) {
//     super(props)
//     }

render() {

    const element = (<div>Text from Element</div>)

    return (
    <div className="comptext">
        <h3>First Component</h3>
            {this.props.displaytext}
            {element}


     

<div className="row">
  <div className="col-1">

  </div>
  <div className="col-10">
    <h3 className="display-4">this element is inside FirstComponent.</h3>
    <h3 className="h4-responsive text-center font-weight-bold">this element is inside FirstComponent</h3>
  </div>
  <div className="col-1">

  </div>
</div>



    </div>)
    }
}