import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import AuthFormContainer from './auth/auth_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import SplashContainer from './home/splash-container';
import ProjectContainer from './project/project_container';
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

  const _setBackground = (nextState, replace ) => {
    document.documentElement.style.backgroundColor = '#eee';
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={ App } >
          <IndexRoute component={ SplashContainer } />
          <Route path='/signup'
                  onEnter={_redirectIfLoggedIn}
                  component={ AuthFormContainer } />
          <Route path='/login'
                  onEnter={_redirectIfLoggedIn}
                  component={ AuthFormContainer } />
          <Route path='/dashboard'
                  onEnter={ _ensureLoggedIn }
                  onEnter={ _setBackground }
                  component={ DashboardContainer } />
                <Route path='/projects/:id' component={ProjectContainer}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
