import React, { Component } from 'react';

let timesMounted = 0;

class ComponentB extends Component {

  componentDidMount() {
    timesMounted += 1;
    console.log( 'ComponentB mounted' );
  }

  componentWillUnmount() {
    console.log( 'ComponentB unmounted' );
  }

  render() {
    if ( ! this.props.shouldRender ) {
      return null;
    }

    return (
      <div>
        <p>Component B (mounts: { timesMounted }).</p>
      </div>
    );
  }
}

export default ComponentB;
