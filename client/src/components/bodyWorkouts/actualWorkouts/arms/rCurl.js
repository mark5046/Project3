import React, { Component } from 'react';
import { Link } from "react-router-dom";

class rCurl extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Reverse Curl</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/arms" className="btn btn-lg btn-info mr-2">Arms</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/arms/rCurl.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Grasp bar with shoulder width overhand grip.</h6><h4>Execution</h4><h6>With elbows to side, raise bar until forearms are vertical. Lower until arms are fully extended. Repeat.</h6><h4>Comments</h4><h6>When elbows are fully flexed, they can travel forward slightly, allowing forearms to be no more than vertical. This additional movement allows for relative release of tension in muscles between repetitions.</h6>
</div>
</div>
</div>

    )
  }
}

export default rCurl