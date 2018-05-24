import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';
import Excercise from "./pages/Excercise";

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import NotFound from './components/not-found/NotFound';
import Showpost from './components/Showpost/Showpost';
import Form from './components/Form/Form';

import Meals from "./components/layout/Meals";
import About from "./components/layout/About";
import Workouts from "./components/layout/Workouts";
import Scrape from "./components/articles/scrape";
import DashboardPub from "./components/dashboardPub/DashboardPub"

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
// chest
import bPress from "./components/bodyWorkouts/actualWorkouts/chest/bPress";
import cDip from "./components/bodyWorkouts/actualWorkouts/chest/cDip";
import fly from "./components/bodyWorkouts/actualWorkouts/chest/fly";
import pOver from "./components/bodyWorkouts/actualWorkouts/chest/pOver";
import pUp from "./components/bodyWorkouts/actualWorkouts/chest/pUp";
import pkUP from "./components/bodyWorkouts/actualWorkouts/chest/pkUp";
import pDec from "./components/bodyWorkouts/actualWorkouts/chest/pDec";
// back
import ltPdn from "./components/bodyWorkouts/actualWorkouts/back/ltPdn";
import iCross from "./components/bodyWorkouts/actualWorkouts/back/iCross";
import sRow from "./components/bodyWorkouts/actualWorkouts/back/sRow";
import cgPdn from "./components/bodyWorkouts/actualWorkouts/back/cgPdn";
// legs
import squat from "./components/bodyWorkouts/actualWorkouts/legs/squat";
import lunge from "./components/bodyWorkouts/actualWorkouts/legs/lunge";
import cRaise from "./components/bodyWorkouts/actualWorkouts/legs/cRaise";
import lCurl from "./components/bodyWorkouts/actualWorkouts/legs/lCurl";
// abs
import wRoll from "./components/bodyWorkouts/actualWorkouts/abs/wRoll";
import sUp from "./components/bodyWorkouts/actualWorkouts/abs/sUp";
import turk from "./components/bodyWorkouts/actualWorkouts/abs/turk";
import sPthru from "./components/bodyWorkouts/actualWorkouts/abs/sPthru";

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
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/workouts" component={Workouts} />
            <div className="container">
              <Route exact path="/meals" component={Meals} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:handle" component={Profile} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
              <Route exact path="/public" component={DashboardPub} />
              <Route exact path="/not-found" component={NotFound} />
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
              {/* chest */}
              <Route exact path="/bPress" component={bPress} />
              <Route exact path="/cDip" component={cDip} />
              <Route exact path="/fly" component={fly} />
              <Route exact path="/pOver" component={pOver} />
              <Route exact path="/pUp" component={pUp} />
              {/* <Route exact path="/pkUp" component={pkUp} /> */}
              <Route exact path="/pDec" component={pDec} />
              {/* back */}
              <Route exact path="/ltPdn" component={ltPdn} />
              <Route exact path="/iCross" component={iCross} />
              <Route exact path="/sRow" component={sRow} />
              <Route exact path="/cgPdn" component={cgPdn} />
              {/* legs */}
              <Route exact path="/squat" component={squat} />
              <Route exact path="/lunge" component={lunge} />
              <Route exact path="/cRaise" component={cRaise} />
              <Route exact path="/lCurl" component={lCurl} />
              {/* abs */}
              <Route exact path="/wRoll" component={wRoll} />
              <Route exact path="/sUp" component={sUp} />
              <Route exact path="/turk" component={turk} />
              <Route exact path="/sPthru" component={sPthru} />

            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
  );
  }
}

export default App;
