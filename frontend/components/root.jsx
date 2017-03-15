import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import AuthFormContainer from './auth/auth_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import SplashContainer from './home/splash-container';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/dashboard');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={ App } >
          <IndexRoute component={ SplashContainer } />
          <Route path='/signup' onEnter={_redirectIfLoggedIn} component={ AuthFormContainer } />
          <Route path='/login' onEnter={_redirectIfLoggedIn} component={ AuthFormContainer } />
          <Route path='/dashboard' onEnter={ _ensureLoggedIn } component={ DashboardContainer } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
