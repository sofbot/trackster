import React from 'react';
import HeaderContainer from './header/header-container';

const App = state => (
  <div>
    <HeaderContainer location={state.location}/>
    { state.children }
  </div>
);

export default App;
