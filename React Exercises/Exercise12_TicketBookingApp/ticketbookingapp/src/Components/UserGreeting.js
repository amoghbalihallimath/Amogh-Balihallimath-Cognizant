import React from 'react';

function UserGreeting() {
  return (
    <div>
      <h2>Welcome back</h2>
      <p>You can now book your flight tickets.</p>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AI-202</td>
            <td>Mumbai</td>
            <td>Delhi</td>
            <td>25-Jul-2026</td>
            <td>₹4500</td>
            <td><button>Book</button></td>
          </tr>
          <tr>
            <td>6E-301</td>
            <td>Bangalore</td>
            <td>Chennai</td>
            <td>26-Jul-2026</td>
            <td>₹3200</td>
            <td><button>Book</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserGreeting;
