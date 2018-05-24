import React, { Component } from 'react';
import { Link } from "react-router-dom";

class pOver extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Pull Over</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/chest" className="btn btn-lg btn-info mr-2">Chest</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/chest/pOver.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Lie on upper back perpendicular to bench. Flex hips slightly. Grasp one dumbbell from behind or from side with both hands under inner plate of dumbbell. Position dumbbell over chest with elbows slightly bent.</h6><h4>Execution</h4><h6>Keeping elbows slightly bent throughout movement, lower dumbbell over and beyond head until upper arms are in-line with torso. Pull dumbbell up and over chest. Repeat.</h6><h4>Comments</h4><h6>Lower body extending off of bench acts as counter balance to resistance and keeps upper back fixed on bench. Avoid hips from raising up significantly. Actual range of motion is dependent upon individual shoulder flexibility. Keep elbows fixed at small bend throughout exercise.</h6>
</div>
</div>
</div>

    )
  }
}

export default pOver