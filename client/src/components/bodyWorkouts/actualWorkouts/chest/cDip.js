import React, { Component } from 'react';
import { Link } from "react-router-dom";

class cDip extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Chest Dip</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/chest" className="btn btn-lg btn-info mr-2">Chest</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/chest/cDip.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Mount wide dip bar with oblique grip (bar diagonal under palm), arms straight with shoulders above hands. Bend knees and hips slightly.</h6><h4>Execution</h4><h6>Lower body by bending arms, allowing elbows to flare out to sides. When slight stretch is felt in chest or shoulders, push body up until arms are straight. Repeat.</h6><h4>Comments</h4><h6><strong>Easier: </strong>To decrease difficulty, get assistance from machine or training partner. Also try performing movement between two benches or self assisted by placing feet on bench or elevation.</h6><h6><strong>Harder: </strong>Added weight can be placed on dip belt or dumbbell can be placed between ankles to increase intensity.</h6>
</div>
</div>
</div>

    )
  }
}

export default cDip