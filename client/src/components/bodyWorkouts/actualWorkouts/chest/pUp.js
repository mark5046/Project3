import React, { Component } from 'react';
import { Link } from "react-router-dom";

class pUp extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Push-up</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/chest" className="btn btn-lg btn-info mr-2">Chest</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/chest/pUp.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Lie prone on floor with hands slightly wider than shoulder width. Raise body up off floor by extending arms with body straight.</h6><h4>Execution</h4><h6>Keeping body straight, lower body to floor by bending arms. Push body up until arms are extended. Repeat.</h6><h4>Comments</h4><h6>Both upper and lower body must be kept straight throughout movement.</h6><h6><strong>Easier: </strong>Resistance can be reduced by performing push-ups with knees bent on floor or placing hands on elevated horizontal bar, in between narrow doorway, or edge of elevated surface.</h6><h6><strong>Harder: </strong>For greater challenge, elevate feet, have partner hold weight on back, perform Chest Dips on parallel bars, or plyometric version for more power.</h6>
</div>
</div>
</div>

    )
  }
}

export default pUp