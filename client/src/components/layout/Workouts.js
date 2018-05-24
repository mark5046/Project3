import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Workouts extends Component {
    

    render() {
      return (
        
   <div className="container">    
  <div className="workouts">
  <h1>Workouts!</h1>
  <div className="body-buttons">
 <Link to="/shoulders" className="btn btn-lg btn-info mr-2">Shoulders</Link>
 <Link to="/arms" className="btn btn-lg btn-light mr-2">Arms</Link>
 <Link to="/chest" className="btn btn-lg btn-info mr-2">Chest</Link>
 <Link to="/back" className="btn btn-lg btn-light mr-2">Back</Link>
 <Link to="/legs" className="btn btn-lg btn-info mr-2">Legs</Link>
 <Link to="/abs" className="btn btn-lg btn-light mr-2">Abs</Link>
  </div>
  </div>
  </div>

      )
    }
}

export default Workouts;