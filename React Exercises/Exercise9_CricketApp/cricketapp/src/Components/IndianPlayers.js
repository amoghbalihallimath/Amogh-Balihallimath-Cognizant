import React, { Component } from 'react';

class IndianPlayers extends Component {
  render() {
    const players = [
      'Rohit Sharma', 'Shubman Gill', 'Virat Kohli', 'Shreyas Iyer',
      'KL Rahul', 'Hardik Pandya', 'Ravindra Jadeja', 'Axar Patel',
      'Jasprit Bumrah', 'Mohammed Shami', 'Kuldeep Yadav'
    ];

    // Destructuring - odd and even index players
    const oddPlayers = players.filter((_, index) => index % 2 !== 0);
    const evenPlayers = players.filter((_, index) => index % 2 === 0);

    // Merge using ES6 spread
    const T20players = ['Rohit Sharma', 'Virat Kohli', 'KL Rahul', 'Hardik Pandya', 'Jasprit Bumrah'];
    const RanjiTrophyPlayers = ['Shubman Gill', 'Shreyas Iyer', 'Ravindra Jadeja', 'Axar Patel', 'Mohammed Shami'];
    const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

    return (
      <div>
        <h2>Indian Players</h2>

        <h3>Odd Team Players (Destructuring)</h3>
        <ul>
          {oddPlayers.map((player, index) => <li key={index}>{player}</li>)}
        </ul>

        <h3>Even Team Players (Destructuring)</h3>
        <ul>
          {evenPlayers.map((player, index) => <li key={index}>{player}</li>)}
        </ul>

        <h3>T20 Players</h3>
        <ul>
          {T20players.map((player, index) => <li key={index}>{player}</li>)}
        </ul>

        <h3>Ranji Trophy Players</h3>
        <ul>
          {RanjiTrophyPlayers.map((player, index) => <li key={index}>{player}</li>)}
        </ul>

        <h3>Merged Players (T20 + Ranji Trophy)</h3>
        <ul>
          {mergedPlayers.map((player, index) => <li key={index}>{player}</li>)}
        </ul>
      </div>
    );
  }
}

export default IndianPlayers;
