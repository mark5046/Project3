import React, { Component } from 'react';
import { Link } from "react-router-dom";

class shoulders extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Shoulders!</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
</div>
<br></br>
<div className="body-buttons">
<Link to="/mPress" className="btn btn-lg btn-warning mr-2">Military Press</Link>
<Link to="/boRow" className="btn btn-lg btn-warning mr-2">Bentover Row</Link>
<Link to="/fRaise" className="btn btn-lg btn-warning mr-2">Front Raise</Link>
<Link to="/uRow" className="btn btn-lg btn-warning mr-2">Upright Row</Link>
<Link to="/yRaise" className="btn btn-lg btn-warning mr-2">Y Raise</Link>
<Link to="/rFly" className="btn btn-lg btn-warning mr-2">Reverse Fly</Link>
<Link to="/shrug" className="btn btn-lg btn-warning mr-2">Shrug</Link>
</div>
</div>
</div>

    )
  }
}

export default shoulders