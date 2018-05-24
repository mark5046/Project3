import React, { Component } from 'react';
import { Link } from "react-router-dom";

class sRow extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Seated Row</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/back" className="btn btn-lg btn-info mr-2">Back</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/back/sRow.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Sit on seat and grasp handles with each hand. Place feet on vertically angled platform. Slide hips back with knees slightly bent.</h6><h4>Execution</h4><h6>Pull handles to waist while straightening torso upright. Pull shoulders back and push chest forward while arching back. Return until arms are extended, shoulders are stretched forward, and lower back is flexed forward. Repeat.</h6><h4>Comments</h4><h6>Exercise is performed on apparatus with no chest pad, in contrast to standard lever seated row machine. This exercise is more similar to Cable Seated Row. Begin with light weight and add additional weight gradually to allow lower back adequate adaptation. Do not pause or bounce at bottom of lift. Do not lower weight beyond mild stretch. Full range of motion through lower back will vary from person to person. For even greater hip and low back articulation, hips may be slid back further with knees straighter.</h6>
</div>
</div>
</div>

    )
  }
}

export default sRow