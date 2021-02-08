import React from 'react';
import './app.scss';
import Navbar from './navbar/navbar';
import Routes from '../ routes';

const App: React.FC = () => {
  return (
    <div className="app ">
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
