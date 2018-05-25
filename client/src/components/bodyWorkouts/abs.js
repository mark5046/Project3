import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./body.css"

class abs extends Component {
     

render() {
    return (
     
<div className="container">     
<div className="workouts">
<h1>Abs!</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
</div>
<br></br>
<div className="body-buttons">
<Link to="/wRoll" className="btn btn-lg btn-info mr-2">Wheel Rollout</Link>
<Link to="/sUp" className="btn btn-lg btn-info mr-2">Sit-up</Link>
<Link to="/turk" className="btn btn-lg btn-info mr-2">Turkish Getup</Link>
<Link to="/sPthru" className="btn btn-lg btn-info mr-2">Suspended Pull Through</Link>
</div>
</div>
</div>

    )
  }
}

export default abs