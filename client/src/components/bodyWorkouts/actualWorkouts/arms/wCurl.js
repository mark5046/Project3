import React, { Component } from 'react';
import { Link } from "react-router-dom";

class wCurl extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Wrist Curl</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/arms" className="btn btn-lg btn-info mr-2">Arms</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/arms/wCurl.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Sit and grasp bar with narrow to shoulder width underhand grip. Rest forearms on thighs with wrists just beyond knees.</h6><h4>Execution</h4><h6>Allow barbell to roll out of palms down to fingers. Raise barbell back up by gripping and pointing knuckles up as high as possible. Lower and repeat.</h6><h4>Comments</h4><h6>Keep elbows approximately wrist height to maintain resistance through full range of motion.</h6>
</div>
</div>
</div>

    )
  }
}

export default wCurl