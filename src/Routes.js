import React, { useState , useContext } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'; 

import Login from './pages/Login';
import Home from './pages/Home';

import {UserContext} from './shared/context/user-context';

export default function Routes() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const user = useContext(UserContext);

    return (
        <Router>
            <Switch>
              {/*<Route path="/home" exact>
                  <Home/>
              </Route> */
              }
              <Route path="/login" exact>             
                <Login/>
              </Route>
              <Route exact path="/" render={() => (
                isLoggedIn ? (
                  <Redirect to="/home"/>
                ) : (
                  <Redirect to="/login"/>
                )
              )}/>
            </Switch>
          </Router>
    )
}