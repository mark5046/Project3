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
import Scrape from "./components/articles/scrape";

import './App.css';
import { isAbsolute } from 'path';

import shoulders from "./components/bodyWorkouts/shoulders";
import arms from "./components/bodyWorkouts/arms";
import chest from "./components/bodyWorkouts/chest";
import back from "./components/bodyWorkouts/back";
import legs from "./components/bodyWorkouts/legs";
import abs from "./components/bodyWorkouts/abs";
// shoulders
import mPress from "./components/bodyWorkouts/actualWorkouts/shoulders/mPress";
import boRow from "./components/bodyWorkouts/actualWorkouts/shoulders/boRow";
import fRaise from "./components/bodyWorkouts/actualWorkouts/shoulders/fRaise";
import uRow from "./components/bodyWorkouts/actualWorkouts/shoulders/uRow";
import yRaise from "./components/bodyWorkouts/actualWorkouts/shoulders/yRaise";
import rFly from "./components/bodyWorkouts/actualWorkouts/shoulders/rFly";
import shrug from "./components/bodyWorkouts/actualWorkouts/shoulders/shrug";
// arms
import hCurl from "./components/bodyWorkouts/actualWorkouts/arms/hCurl";
import pCurl from "./components/bodyWorkouts/actualWorkouts/arms/pCurl";
import rCurl from "./components/bodyWorkouts/actualWorkouts/arms/rCurl";
import wCurl from "./components/bodyWorkouts/actualWorkouts/arms/wCurl";
import kBack from "./components/bodyWorkouts/actualWorkouts/arms/kBack";
import dip from "./components/bodyWorkouts/actualWorkouts/arms/dip";
import sCrush from "./components/bodyWorkouts/actualWorkouts/arms/sCrush";

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
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component= { About } />
            <Route exact path="/workouts" component= { Workouts } />
            <div className="container">
             <Route exact path="/meals" component= {Meals} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} /> 
            </div>
            <div className="workout-routes">
              <Route exact path="/shoulders" component={shoulders} />
              <Route exact path="/arms" component={arms} />
              <Route exact path="/chest" component={chest} />
              <Route exact path="/back" component={back} />
              <Route exact path="/legs" component={legs} />
              <Route exact path="/abs" component={abs} />
            </div>
            <div className="actual-workouts">
              {/* shoulders */}
              <Route exact path="/mPress" component={mPress} />
              <Route exact path="/boRow" component={boRow} />
              <Route exact path="/fRaise" component={fRaise} />
              <Route exact path="/uRow" component={uRow} />
              <Route exact path="/yRaise" component={yRaise} />
              <Route exact path="/rFly" component={rFly} />
              <Route exact path="/shrug" component={shrug} />
              {/* arms */}
              <Route exact path="/hCurl" component={hCurl} />
              <Route exact path="/pCurl" component={pCurl} />
              <Route exact path="/rCurl" component={rCurl} />
              <Route exact path="/wCurl" component={wCurl} />
              <Route exact path="/kBack" component={kBack} />
              <Route exact path="/dip" component={dip} />
              <Route exact path="/sCrush" component={sCrush} />
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
