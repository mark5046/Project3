import React, { Component } from 'react';
import { Link } from "react-router-dom";

class lCurl extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Leg Curl</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/legs" className="btn btn-lg btn-info mr-2">Legs</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/legs/lCurl.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Attach two ankle cuffs to low pulley attachment. With cuffs on both ankles lie prone on flat bench with knees just beyond edge of bench. Grip under side or base of bench for support.</h6><h4>Execution</h4><h6>Raise ankles to glutes by flexing knees. Lower ankles until knees are straight. Repeat.</h6><h4>Comments</h4><h6>Keep torso on bench to reduce hyperextension of lower back. Dorsal flexion of ankle reduces active insufficiency of Gastrocnemius allowing it to assist in knee flexion.</h6>
</div>
</div>
</div>

    )
  }
}

export default lCurl