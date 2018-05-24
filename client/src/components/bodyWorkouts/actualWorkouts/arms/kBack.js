import React, { Component } from 'react';
import { Link } from "react-router-dom";

class kBack extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Kick Back</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/arms" className="btn btn-lg btn-info mr-2">Arms</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/arms/kBack.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Kneel over bench with arm supporting body. Grasp dumbbell. Position upper arm parallel to floor.</h6><h4>Execution</h4><h6>Extend arm until it is straight. Return and repeat. Continue with opposite arm.</h6><h4>Comments</h4><h6>For greater range of motion, upper arm can be positioned with elbow slightly higher than shoulder.</h6>
</div>
</div>
</div>

    )
  }
}

export default kBack