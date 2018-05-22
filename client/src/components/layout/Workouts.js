import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import BodyButtons from "../buttons/BodyButtons";
import Card from "../buttons/Card";

class Workouts extends Component {
    
handleButtonClick=event => {
    alert("hello")
}

    render() {
      return (
       
  <div className="workouts">
  <h1>Workouts!</h1>
  <div className="body-buttons">
  <Card 
  onClick={this.handleButtonClick} data-value="Shoulders"
  />

  </div>
  </div>

      )
    }
}

export default Workouts;