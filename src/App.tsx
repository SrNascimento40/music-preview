import React from 'react';
import Header from './components/Header';
import { Router } from './Router/routes';
import Default from './template/default'

function App() {
  return (
    <Default>
      <Header />
      <Router />
    </Default>
  );
}

export default App;
