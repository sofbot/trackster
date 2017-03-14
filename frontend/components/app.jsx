import React from 'react';
import AuthContainer from './auth/auth_container';
import Splash from './home/splash';

const App = ({ children }) => (
  <div>
    <AuthContainer />
    <Splash />
    { children }
  </div>
);

export default App;
