import React, { Component } from 'react';
import { Link } from "react-router-dom";

class sUp extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Sit-up</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/abs" className="btn btn-lg btn-info mr-2">Abs</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/abs/sUp.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Hook feet under foot brace or secure low overhang. Lie supine on floor or bench with hips bent. Place hands behind neck or on side of neck.</h6><h4>Execution</h4><h6>Raise torso from bench by bending waist and hips. Return until back of shoulders contact incline board. Repeat.</h6><h4>Comments</h4><h6>Feet can be held down by partner instead of foot bar. Certain individuals may need to keep their neck in neutral position with space between their chin and sternum. If upper back does not come completely down at end of movement, abdominal muscles may only be isometrically involved in exercise. Pectineus, Adductor Longus, and Brevis do not assist in hip flexion since hips are already initially bent.</h6><h6><stronger>Easier: </stronger>Movement can be made easier by placing arms further down away from head.</h6><h6><strong>Harder: </strong>Exercise can be made more challenging by placing hands further up on head or beyond head.</h6>
</div>
</div>
</div>

    )
  }
}

export default sUp