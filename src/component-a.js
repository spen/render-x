import React, { Component } from 'react';

let timesMounted = 0;

class ComponentA extends Component {

  componentDidMount() {
    timesMounted += 1;
    console.log( 'ComponentA mounted' );
  }

  componentWillUnmount() {
    console.log( 'ComponentA unmounted' );
  }

  render() {
    return (
      <div>
        <p>Component A (mounts: { timesMounted }).</p>
      </div>
    );
  }
}

export default ComponentA;
