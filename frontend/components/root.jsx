import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import AuthFormContainer from './auth/auth_form_container';
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
        <Route path='/' component={ App } />
        <Route path='/sign-up' component={ AuthFormContainer } />
        <Route path='/sign-in' component={ AuthFormContainer } />
      </Router>
    </Provider>
  );
};

export default Root;
