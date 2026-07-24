import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: null
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const euro = (parseFloat(this.state.rupees) / 89.5).toFixed(2);
    this.setState({ euro });
  }

  render() {
    return (
      <div>
        <h2>Currency Convertor (INR to EUR)</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="Enter amount in Rupees"
            value={this.state.rupees}
            onChange={this.handleChange}
          />
          <button type="submit">Convert</button>
        </form>
        {this.state.euro && (
          <p>₹{this.state.rupees} = €{this.state.euro}</p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
