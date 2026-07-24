import React, { Component } from 'react';

class WelcomeButton extends Component {

  sayMessage = (message) => {
    alert(message);
  }

  handleOnPress = (e) => {
    alert('I was clicked');
  }

  render() {
    return (
      <div>
        <h2>Welcome Button</h2>
        <button onClick={() => this.sayMessage('welcome')}>Say Welcome</button>

        <h2>Synthetic Event - OnPress</h2>
        <button onClick={this.handleOnPress}>Click Me (OnPress)</button>
      </div>
    );
  }
}

export default WelcomeButton;
