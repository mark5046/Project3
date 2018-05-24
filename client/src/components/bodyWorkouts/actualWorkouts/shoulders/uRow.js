import React, { Component } from 'react';
import { Link } from "react-router-dom";

class uRow extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Upright Row</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/shoulders" className="btn btn-lg btn-info mr-2">Shoulders</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/shoulders/uRow.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Grasp bar with shoulder width or slightly narrower overhand grip.</h6><h4>Execution</h4><h6>Pull bar to neck with elbows leading. Allow wrists to flex as bar rises. Lower and repeat.</h6><h4>Comments</h4><h6>Bar can be recieved from barbell rack, standing behind bar mid-thigh height.</h6>
</div>
</div>
</div>

    )
  }
}

export default uRow