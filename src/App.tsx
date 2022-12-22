import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { Router } from './Router/routes';
import Default from './template/default'
import { Navigate } from 'react-router-dom';

function App() {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token"))!.split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }

    setToken(token)

  }, [])

  if (!token) {
    return <Navigate replace to="/login" />;
  } else {
    return (
      <Default>
        <Header />
        <Router />
      </Default>
    )
  };
}

export default App;
