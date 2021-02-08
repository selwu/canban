import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Registration from '../components/registration/registration';
import Authorization from '../components/authorization/authorization';
import Navbar from '../components/navbar/navbar';

const Routes = () => {
  return (
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
    </Switch>
  );
};

export default Routes;
