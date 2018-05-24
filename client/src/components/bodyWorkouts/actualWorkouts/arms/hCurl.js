import React, { Component } from 'react';
import { Link } from "react-router-dom";

class hCurl extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Hammer Curl</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/arms" className="btn btn-lg btn-info mr-2">Arms</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/arms/hCurl.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Grasp cable rope with palms facing inward. Stand upright with arms straight down to sides.</h6><h4>Execution</h4>' + '<h6>With elbows to side, raise rope forward and upward with both arms until forearms are vertical. Lower until arms are fully extended. Repeat.</h6>' + '<h4>Comments</h4>' + '<h6>When elbows are fully flexed, they can travel forward slightly, allowing forearms to be no more than vertical. This additional movement allows for relative release of tension in muscles between repetitions.</h6>
</div>
</div>
</div>

    )
  }
}

export default hCurl