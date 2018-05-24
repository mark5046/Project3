import React, { Component } from 'react';
import { Link } from "react-router-dom";

class bPress extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Bench Press</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/chest" className="btn btn-lg btn-info mr-2">Chest</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/chest/bPress.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Lie supine on bench. Dismount barbell from rack over upper chest using wide oblique overhand grip.</h6><h4>Execution</h4><h6>Lower weight to chest. Press bar upward until arms are extended. Repeat.</h6><h4>Comments</h4><h6>Range of motion will be compromised if grip is too wide.</h6>
</div>
</div>
</div>

    )
  }
}

export default bPress