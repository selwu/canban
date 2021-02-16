import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './components/app';
import { UserContext } from "./contexts/user-context";
import { userStore } from "./stores/user";

ReactDOM.render(
  <React.StrictMode>
    <UserContext.Provider value={userStore}>
      <Router>
        <App />
      </Router>
    </UserContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
