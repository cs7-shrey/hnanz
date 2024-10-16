import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'
import { BrowserRouter as Router } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Auth0Provider
       domain="dev-2jarn8jnr20lwuql.us.auth0.com"
       clientId="C89QY9sqlapRSH69mnVERAQIuxTtdb5x"
       redirectUri={`${window.location.origin}/user`}
       cacheLocation="localstorage" 
       useRefreshTokens={true}
       audience="nexusidentifier"
       scope="openid profile email"
      >
        <App />
      </Auth0Provider>
    </Router>
);
