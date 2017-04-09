import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Hello, world!</h1>
      	<p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      	<p><Button bsStyle="primary">Learn more</Button></p>
      </div>
    );
  }
}

export default Jumbotron;