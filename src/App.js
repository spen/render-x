import React, { Component } from 'react';
import ComponentA from './component-a';
import ComponentB from './component-b';

class App extends Component {

  state={
    shouldShowComponents: true,
  }

  componentDidMount() {
    this.blink()
  }

  blink = () => {
    this.setState( { shouldShowComponents: false } );

    setTimeout( () => {
      this.setState( { shouldShowComponents: true } );

      setTimeout( this.blink, 490 );

      }, 10 );
  }

  renderComponentA() {
    if ( ! this.state.shouldShowComponents ) {
      return;
    }

    return (
      <ComponentA />
    );
  }

  render() {
    return (
      <div className="App" style={ { textAlign: 'center'} }>
        { this.renderComponentA() }
        <ComponentB shouldRender={ this.state.shouldShowComponents } />
      </div>
    );
  }
}

export default App;