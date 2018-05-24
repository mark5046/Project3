import React, { Component } from 'react';
import { Link } from "react-router-dom";

class pCurl extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Preacher Curl</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/arms" className="btn btn-lg btn-info mr-2">Arms</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/arms/pCurl.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Sit on preacher bench placing back of arms on pad. Grasp curl bar with shoulder width underhand grip.</h6><h4>Execution</h4><h6>Raise bar until forearms are vertical. Lower barbell until arms are fully extended. Repeat.</h6><h4>Comments</h4><h6>Seat should be adjusted to allow arm pit to rest near top of pad. Back of upper arm should remain on pad throughout movement. The long head (lateral head) of biceps brachii is activated significantly more than short head (medial head) of biceps brachii since short head enters into active insufficiency as it continues to contract.</h6>
</div>
</div>
</div>

    )
  }
}

export default pCurl