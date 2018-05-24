import React, { Component } from 'react';
import { Link } from "react-router-dom";

class fly extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Fly</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/chest" className="btn btn-lg btn-info mr-2">Chest</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/chest/fly.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Grasp two dumbbells. Lie supine on bench. Support dumbbells above chest with arms fixed in slightly bent position. Internally rotate shoulders so elbows point out to sides.</h6><h4>Execution</h4><h6>Lower dumbbells to sides until chest muscles are stretched with elbows fixed in slightly bent position. Bring dumbbells together in wide hugging motion until dumbbells are nearly together. Repeat.</h6><h4>Comments</h4><h6>Keep shoulders internally rotated so elbows point downward at bottom position and outward at top position. Keep elbows at fixed angle, only slightly bent.</h6>
</div>
</div>
</div>

    )
  }
}

export default fly