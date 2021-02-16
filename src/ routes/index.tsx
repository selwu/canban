import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Registration from '../components/registration/registration';
import Authorization from '../components/authorization/authorization';
import Navbar from '../components/navbar/navbar';
// import { useSelector } from 'react-redux';
import { RootState } from '../utils/types';
import Disk from '../components/disk/disk';
import { Redirect } from 'react-router-dom';

const Routes = () => {
  // const isAuth = useSelector((state: RootState) => state.user.isAuth);
  return (
    <>
      {/* {!isAuth ? ( */}
        <Switch>
          <Route exact path="/">
            <Navbar />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/login">
            <Authorization />
          </Route>
          <Redirect to="/" />
        </Switch>
      {/* ) : (
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Disk />
          </Route>
          <Redirect to="/" />
        </Switch>
      )} */}
    </>
  );
};

export default Routes;
