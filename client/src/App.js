import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from "./components/auth/Login";
import About from "./components/layout/About";
import Workouts from "./components/layout/Workouts";


import './App.css';
import { isAbsolute } from 'path';

class App extends Component {
  render() {
   
    return (
      <Router>
        <div className="App">
        <Navbar />
          <Route exact path="/" component= { Landing } />
          <Route exact path="/about" component= { About } />
          <Route exact path="/workouts" component= { Workouts } />
          <div className="container">
          <Route exact path="/register" component= { Register } />
          <Route exact path="/login" component= { Login } />
          </div>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
