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
            <Route exact path="/public" component= { DashboardPub } />
            <Route exact path="/not-found" component={NotFound} />
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
