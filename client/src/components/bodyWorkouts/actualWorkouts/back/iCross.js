import React, { Component } from 'react';
import { Link } from "react-router-dom";

class iCross extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Iron Cross</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/back" className="btn btn-lg btn-info mr-2">Back</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/back/iCross.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Stand on platform and grasp handles to sides with palms down grip.</h6><h4>Execution</h4><h6>With arms straight, pull lever handles down below hips. Return lever handles upward just above shoulder high, or just before slight pressure in shoulder is felt. Repeat.</h6><h4>Comments</h4><h6>Platform should be adjusted so shoulder joint and girdle are approximate height as lever fulcrum.</h6>
</div>
</div>
</div>

    )
  }
}

export default iCross