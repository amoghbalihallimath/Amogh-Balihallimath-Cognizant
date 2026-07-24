import React from 'react';
import Counter from './Components/Counter';
import WelcomeButton from './Components/WelcomeButton';
import CurrencyConvertor from './Components/CurrencyConvertor';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Event Examples App</h1>
      <Counter />
      <hr />
      <WelcomeButton />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
