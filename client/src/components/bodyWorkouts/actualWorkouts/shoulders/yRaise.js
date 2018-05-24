import React, { Component } from 'react';
import { Link } from "react-router-dom";

class yRaise extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Y Raise</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/shoulders" className="btn btn-lg btn-info mr-2">Shoulders</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/shoulders/yRaise.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Stand facing between low pulleys medium width apart, grasp left stirrup with right hand and right stirrup with left hand. Step back slightly away from pulleys and stand upright with cables crossed in front of hips.</h6><h4>Execution</h4><h6>With elbows slightly bent, raise arms upward and outward to sides in Y configuration until elbows are approximately lateral to each ear. Lower stirrups forward and downward in reverse pattern. Repeat.</h6><h4>Comments</h4><h6>Maintain fixed slightly bent elbow position throughout exercise. Stirrup is raised by combining shoulder abduction and flexion. Slight shoulder external rotation may occur with elbows bent. Front Deltoid assists shoulder flexion if upper arm angle is slightly high. Rear Deltoid assists shoulder horizontal abduction if upper arm angle is slightly low.</h6>
</div>
</div>
</div>

    )
  }
}

export default yRaise