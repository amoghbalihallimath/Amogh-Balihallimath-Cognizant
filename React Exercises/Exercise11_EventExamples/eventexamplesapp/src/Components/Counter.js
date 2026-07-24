import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementValue = () => {
    this.setState({ count: this.state.count + 1 });
  }

  sayHello = () => {
    alert('Hello! This is a static message.');
  }

  handleIncrement = () => {
    this.incrementValue();
    this.sayHello();
  }

  decrementValue = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.decrementValue}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
