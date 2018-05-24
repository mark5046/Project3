import React, { Component } from 'react';
import { Link } from "react-router-dom";

class shrug extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Shrug</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/shoulders" className="btn btn-lg btn-info mr-2">Shoulders</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/shoulders/shrug.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Stand holding barbell with overhand or mixed grip; shoulder width or slightly wider.</h6><h4>Execution</h4><h6>Elevate shoulders as high as possible. Lower and repeat.</h6><h4>Comments</h4><h6>Since this movement becomes more difficult as full shoulder elevation is achieved, height criteria for shoulder elevation may be needed. For example, raising shoulders until slope of shoulders becomes horizontal may be considered adequate depending upon individual body structure and range of motion with lighter weight.</h6>
</div>
</div>
</div>

    )
  }
}

export default shrug