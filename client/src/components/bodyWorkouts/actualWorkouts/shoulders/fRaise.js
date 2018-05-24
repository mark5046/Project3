import React, { Component } from 'react';
import { Link } from "react-router-dom";

class fRaise extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Front Raise</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/shoulders" className="btn btn-lg btn-info mr-2">Shoulders</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/shoulders/fRaise.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Grasp barbell with overhand grip with elbows straight or slightly bent.</h6><h4>Execution</h4><h6>Start with hands at waist level. Raise barbell forward and upward until upper arms are above horizontal. Lower and repeat.</h6><h4>Comments</h4><h6>Absolute height of movement may depend on range of motion. Raise should be limited to height achieved just before tightness is felt in shoulder capsule. Alternatively, height just above horizontal may be considered adequate. Elbows may be kept straight or slightly bent throughout movement.</h6>
</div>
</div>
</div>

    )
  }
}

export default fRaise