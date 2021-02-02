import React from 'react';
import './App.css';

const App = () => {
  const ddd = () => {
    for (let i = 0; i < 4; i++) {
      console.log(i);
    }
  };
  ddd();

  return <div className="App"></div>;
};

export default App;
