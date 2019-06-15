import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import Dashboard from './views/Dashboard/index.jsx';
import ProductList from './views/ProductList/index.jsx';
import UserList from './views/UserList/index.jsx';
import Typography from './views/Typography/index.jsx';
import Icons from './views/Icons/index.jsx';
import Account from './views/Account/index.jsx';
import Settings from './views/Settings/index.jsx';
import SignUp from './views/SignUp/index.jsx';
import SignIn from './views/SignIn/index.jsx';
import UnderDevelopment from './views/UnderDevelopment/index.jsx';
import NotFound from './views/NotFound/index.jsx';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/dashboard"
        />
        <Route
          component={Dashboard}
          exact
          path="/dashboard"
        />
        <Route
          component={UserList}
          exact
          path="/users"
        />
        <Route
          component={ProductList}
          exact
          path="/products"
        />
        <Route
          component={Typography}
          exact
          path="/typography"
        />
        <Route
          component={Icons}
          exact
          path="/icons"
        />
        <Route
          component={Account}
          exact
          path="/account"
        />
        <Route
          component={Settings}
          exact
          path="/settings"
        />
        <Route
          component={SignUp}
          exact
          path="/sign-up"
        />
        <Route
          component={SignIn}
          exact
          path="/sign-in"
        />
        <Route
          component={UnderDevelopment}
          exact
          path="/under-development"
        />
        <Route
          component={NotFound}
          exact
          path="/not-found"
        />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}
