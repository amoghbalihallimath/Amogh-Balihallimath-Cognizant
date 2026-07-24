import React, { Component } from 'react';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import Greeting from './Components/Greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div style={{ padding: '20px' }}>
        <h1>Ticket Booking App</h1>
        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
        <hr />
        <Greeting isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

export default App;
