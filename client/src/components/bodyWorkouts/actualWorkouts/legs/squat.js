import React, { Component } from 'react';
import { Link } from "react-router-dom";

class squat extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Squat</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/legs" className="btn btn-lg btn-info mr-2">Legs</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/legs/squat.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>From rack with barbell at upper chest height, position bar low on back of shoulders. Grasp barbell to sides. Dismount bar from rack and stand with wide stance.</h6><h4>Execution</h4><h6>Squat down by bending hips back while allowing knees to bend forward slightly, keeping back straight and knees pointed same direction as feet. Descend until thighs are just past parallel to floor. Extend hips and knees until legs are straight. Return and repeat.</h6><h4>Comments</h4><h6>Keep head facing forward, back straight and feet flat on floor; equal distribution of weight through forefoot and heel. Knees should point same direction as feet throughout movement. At bottom of squat, crease at hips must be lower than top of knee cap.</h6>
</div>
</div>
</div>

    )
  }
}

export default squat