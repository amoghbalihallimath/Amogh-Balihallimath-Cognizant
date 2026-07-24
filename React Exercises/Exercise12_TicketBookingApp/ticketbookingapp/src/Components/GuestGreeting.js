import React from 'react';

function GuestGreeting() {
  return (
    <div>
      <h2>Please sign up.</h2>
      <p>Login to book flight tickets.</p>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AI-202</td>
            <td>Mumbai</td>
            <td>Delhi</td>
            <td>25-Jul-2026</td>
            <td>₹4500</td>
          </tr>
          <tr>
            <td>6E-301</td>
            <td>Bangalore</td>
            <td>Chennai</td>
            <td>26-Jul-2026</td>
            <td>₹3200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default GuestGreeting;
