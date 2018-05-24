import React, { Component } from 'react';
import { Link } from "react-router-dom";

class sPthru extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Suspended Pull Through</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/abs" className="btn btn-lg btn-info mr-2">Abs</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/abs/sPthru.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Sit on floor with feet under suspension trainer loops in low position. Reach and grasp bottom of loops and lay back supine. Raise legs and place heels in loops with soles contacting handles (or ankles through loops as shown). Extend legs out straight. Sit up and place hands on floor to sides at desired distance from suspension trainer. Raise hips from floor, supporting upper body with arms.</h6><h4>Execution</h4><h6>Pull hips back while flexing spine in C shape. Raise hips up high by straightening spine and hips until straight.</h6><h4>Comments</h4><h6>Erector Spinae is exercised during spinal extension, whereas, Abdominals are exercised during spinal flexion.</h6><h6><stronger>Easier: </stronger>Movement can be made easier for Erector Spinae, yet harder for Abdominals by positioning body further back, away horizontally from anchor of suspension trainer.</h6><h6><stronger>Harder: </stronger>Movement can be made harder for Erector Spinae, yet easier for Abdominals by positioning body closer under anchor of suspension trainer.</h6>
</div>
</div>
</div>

    )
  }
}

export default sPthru