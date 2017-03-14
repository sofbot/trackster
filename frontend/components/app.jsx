import React from 'react';
import AuthContainer from './auth/auth_container';
import { Header } from './header/header';

const App = state => (
  <div>
    <Header location={state.location} />
    { state.children }
  </div>
);

export default App;
