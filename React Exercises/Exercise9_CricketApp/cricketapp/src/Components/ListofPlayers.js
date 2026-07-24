import React, { Component } from 'react';

class ListofPlayers extends Component {
  render() {
    const players = [
      { name: 'Rohit Sharma', score: 85 },
      { name: 'Shubman Gill', score: 62 },
      { name: 'Virat Kohli', score: 90 },
      { name: 'Shreyas Iyer', score: 45 },
      { name: 'KL Rahul', score: 78 },
      { name: 'Hardik Pandya', score: 55 },
      { name: 'Ravindra Jadeja', score: 40 },
      { name: 'Axar Patel', score: 33 },
      { name: 'Jasprit Bumrah', score: 15 },
      { name: 'Mohammed Shami', score: 20 },
      { name: 'Kuldeep Yadav', score: 68 }
    ];

    const allPlayers = players.map((player, index) => (
      <li key={index}>{player.name} - Score: {player.score}</li>
    ));

    const lowScorers = players
      .filter(player => player.score < 70)
      .map((player, index) => (
        <li key={index}>{player.name} - Score: {player.score}</li>
      ));

    return (
      <div>
        <h2>List of Players</h2>
        <ul>{allPlayers}</ul>
        <h3>Players with Score below 70</h3>
        <ul>{lowScorers}</ul>
      </div>
    );
  }
}

export default ListofPlayers;
