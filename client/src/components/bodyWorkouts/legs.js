import React, { Component } from 'react';
import { Link } from "react-router-dom";

class legs extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Legs!</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
</div>
<br></br>
<div className="body-buttons">
<Link to="/squat" className="btn btn-lg btn-warning mr-2">Squat</Link>
<Link to="/lunge" className="btn btn-lg btn-warning mr-2">Lunge</Link>
<Link to="/cRaise" className="btn btn-lg btn-warning mr-2">Calf Raise</Link>
<Link to="/lCurl" className="btn btn-lg btn-warning mr-2">Leg Curl</Link>
</div>
</div>
</div>

    )
  }
}

export default legs