import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';


import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from "./components/auth/Login";

import Meals from "./components/layout/Meals";
import About from "./components/layout/About";
import Workouts from "./components/layout/Workouts";

import './App.css';
import { isAbsolute } from 'path';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <div>
      {/* <Router>
        <div className="App">
        <Navbar />
          <Route exact path="/" component= { Landing } />
          <Route exact path="/about" component= { About } />
          <Route exact path="/workouts" component= { Workouts } />
          <div className="container">
          <Route exact path="/meals" component= {Meals} />
          <Route exact path="/register" component= { Register } />
          <Route exact path="/login" component= { Login } />
          </div>
          </div>
        </Router> */}
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component= { About } />
            <Route exact path="/workouts" component= { Workouts } />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
      </div>
    );
  }
}

export default App;
