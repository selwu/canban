import React from 'react';
import './app.scss';
import Authorization from './authorization/authorization';

const App: React.FC = () => {
  return (
    <div className="app ">
      <Authorization />
    </div>
  );
};

export default App;
