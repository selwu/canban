import React from 'react';
import './app.css';
import Header from './header/header';
import ColumnList from './column-list/column-list';

const App: React.FC = () => {
  return (
    <div className="app ">
      <Header />
      <ColumnList />
    </div>
  );
};

export default App;
