import React, { useEffect } from 'react';
import './app.scss';
import Routes from '../ routes';
// import { useDispatch } from 'react-redux';
import { auth } from '../actions/user';

const App: React.FC = () => {
  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(auth());
  }, []);
  return (
    <div className="app ">
      <Routes />
    </div>
  );
};

export default App;
