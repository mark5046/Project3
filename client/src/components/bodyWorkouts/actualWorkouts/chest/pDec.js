import React, { Component } from 'react';
import { Link } from "react-router-dom";

class pDec extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Pec Deck</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/chest" className="btn btn-lg btn-info mr-2">Chest</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/chest/pDec.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Sit on machine with back on pad. If available, push foot lever until padded lever moves forward. Place forearms on padded lever. Position upper arms approximately parallel. Release foot lever.</h6><h4>Execution</h4><h6>Push levers together. Return until chest muscles are stretched. Repeat.</h6><h4>Comments</h4><h6>None.</h6>
</div>
</div>
</div>

    )
  }
}

export default pDec