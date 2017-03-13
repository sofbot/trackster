import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import AuthFormContainer from './auth/auth_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={ App } >
          <Route path='/signup' component={ AuthFormContainer } />
          <Route path='/login' component={ AuthFormContainer } />
        </Route>

      </Router>
    </Provider>
  );
};

export default Root;

// <Route path='/dashboard' component={ DashboardContainer } />
