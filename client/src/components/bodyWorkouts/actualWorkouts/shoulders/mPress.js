import React, { Component } from 'react';
import { Link } from "react-router-dom";

class mPress extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Military Press</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/shoulders" className="btn btn-lg btn-info mr-2">Shoulders</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/shoulders/mPress.gif'></img>
<h3>Instructions</h3><h4>Preparation</h4><h6>Grasp barbell from rack or clean barbell from floor with overhand grip, slightly wider than shoulder width. Position bar in front of neck. (note: while some will position the bar behind the neck, this can lead to injury and provides no real benefits)</h6><h4>Execution</h4><h6>Press bar upward until arms are extended overhead. Lower to front of neck and repeat.</h6><h4>Comments</h4><h6>Feet may be positioned shoulder width apart or one foot in front of other with forward leg slightly bent (as shown). Upper chest assists (instead of side delts) since grip is slightly narrower and chest is high with low back arched back slightly. Also known as Overhead Press.</h6>
</div>
</div>
</div>

    )
  }
}

export default mPress