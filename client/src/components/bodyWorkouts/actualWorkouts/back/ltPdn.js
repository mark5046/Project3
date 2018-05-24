import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ltPdn extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Lat Pulldown</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/back" className="btn btn-lg btn-info mr-2">Back</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/back/ltPdn.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Grasp cable bar with wide grip. Sit with thighs under supports.</h6><h4>Execution</h4><h6>Pull down cable bar to upper chest. Return until arms and shoulders are fully extended. Repeat.</h6><h4>Comments</h4><h6>Range of motion will be compromised if grip is too wide.</h6>
</div>
</div>
</div>

    )
  }
}

export default ltPdn