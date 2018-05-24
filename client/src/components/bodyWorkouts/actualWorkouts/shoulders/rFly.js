import React, { Component } from 'react';
import { Link } from "react-router-dom";

class rFly extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Reverse Fly</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/shoulders" className="btn btn-lg btn-info mr-2">Shoulders</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/shoulders/rFly.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Stand facing twin pulley cables positioned close together and approximately shoulder height. Grasp stirrup cable attachment in each hand. Step back away from machine so cable is taut. Stand with feet staggered. Point elbows outward with arms straight or slightly bent.</h6><h4>Execution</h4><h6>Pull stirrups out to sides, maintaining stiff elbow position throughout exercise. Return to original position and repeat.</h6><h4>Comments</h4><h6>Upper arms should travel in horizontal path at shoulder height (not downward) to minimize Latissimus Dorsi involvement.</h6>
</div>
</div>
</div>

    )
  }
}

export default rFly