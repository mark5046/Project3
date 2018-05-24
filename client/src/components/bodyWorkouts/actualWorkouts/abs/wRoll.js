import React, { Component } from 'react';
import { Link } from "react-router-dom";

class wRoll extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Wheel Rollout</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/abs" className="btn btn-lg btn-info mr-2">Abs</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/abs/wRoll.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Kneel on floor or mat. Grasp handles on wheel to each side with overhand grip. Position wheel near front of knees and lean over wheel with arms extended downward, supporting upper body.</h6><h4>Execution</h4><h6>With arms straight, roll wheel out as far as possible. Lower body gently to floor extending arms forward. Raise body back up by flexing hips and pulling arms back to original position. Return until hips are extended. Repeat.</h6><h4>Comments</h4><h6>Keep elbows straight or nearly straight throughout exercise. Also known as Wheel Kneeling Rollout. Rectus Abdominis and Obliques practically contract isometrically since little waist flexion occurs under resistance. With no waist flexion, Rectus Abdominis and External Oblique act to stabilize pelvis and waist during hip flexion.</h6><h6><strong>Easier: </strong>Descending only part way down is much easier and can be performed in this way to progress into exercise. Movement can also be made easier by performing exercise up an incline (i.e. end of incline ab board or decline bench) or assisted by cable.</h6><h6><strong>Harder: </strong>Make sure to roll out until shoulder is fully extended through full range of motion. Exercise can be made much more challenging by performing exercise on feet with knees straight, up an incline, progressing to floor.</h6>
</div>
</div>
</div>

    )
  }
}

export default wRoll