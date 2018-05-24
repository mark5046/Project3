import React, { Component } from 'react';
import { Link } from "react-router-dom";

class turk extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Turkish Getup</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/abs" className="btn btn-lg btn-info mr-2">Abs</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/abs/turk.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Lie supine on floor. Position dumbbell straight above shoulder with arm straight and vertical. Lie left arm out to side.</h6><h4>Execution</h4><h6>Stand up while keeping arm with dumbbell straight and vertical. Assist by using free arm, pushing off into floor. Return to floor by reversing movement.</h6><h4>Comments</h4><h6>Get up and down seamlessly, without jerky transitions.</h6>
</div>
</div>
</div>

    )
  }
}

export default turk