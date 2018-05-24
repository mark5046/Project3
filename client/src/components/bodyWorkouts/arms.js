import React, { Component } from 'react';
import { Link } from "react-router-dom";

class arms extends Component {
     

render() {
    return (
 
<div className="container"> 
<div className="workouts">
<h1>Arms!</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
</div>
<br></br>
<div className="body-buttons">
<Link to="/hCurl" className="btn btn-lg btn-success mr-2">Hammer Curl</Link>
<Link to="/pCurl" className="btn btn-lg btn-success mr-2">Preacher Curl</Link>
<Link to="/rCurl" className="btn btn-lg btn-success mr-2">Reverse Curl</Link>
<Link to="/wCurl" className="btn btn-lg btn-success mr-2">Wrist Curl</Link>
<Link to="/kBack" className="btn btn-lg btn-success mr-2">Kick Back</Link>
<Link to="/dip" className="btn btn-lg btn-success mr-2">Dip</Link>
<Link to="/sCrush" className="btn btn-lg btn-success mr-2">Skull Crusher</Link>
</div>
</div>
</div>

    )
  }
}

export default arms