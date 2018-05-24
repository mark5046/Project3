import React, { Component } from 'react';
import { Link } from "react-router-dom";

class cgPdn extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Closegrip Pulldown</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/back" className="btn btn-lg btn-info mr-2">Back</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/back/cgPdn.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Grasp parallel cable attachment. Sit with thighs under supports.</h6><h4>Execution</h4><h6>Pull down cable attachment to upper chest. Return until arms and shoulders are fully extended. Repeat.</h6><h4>Comments</h4>
</div>
</div>
</div>

    )
  }
}

export default cgPdn