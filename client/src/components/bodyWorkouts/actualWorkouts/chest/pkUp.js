import React, { Component } from 'react';
import { Link } from "react-router-dom";

class pkUp extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Pike Push-up</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/chest" className="btn btn-lg btn-info mr-2">Chest</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/chest/pkUp.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Kneel on two benches positioned side by side slightly apart at end nearest head. Place hands on ends of benches. With forefeet on opposite ends of bench, raise rear end high up with arms, back, and knees straight.</h6><h4>Execution</h4><h6>Lower head between ends of benches by bending arms. Push body back up to original position by extending arms. Repeat.</h6><h4>Comments</h4><h6>Pike Push-up (for upper chest) differs from Pike Press (for front delts) in that, feet are further away from hands so body is less inverted in lowest position.</h6><h6><strong>Easier: </strong>Resistance can be reduced by performing exercise on bench or apparatus with hands positioned higher than feet. Keep in mind, this specialized movement may not be necessary since upper chest can be utilized somewhat during pushup movements.</h6><h6><strong>Harder: </strong>For greater challenge, place feet closer to hands, emphasizing front delts.</h6>
</div>
</div>
</div>

    )
  }
}

export default pkUp