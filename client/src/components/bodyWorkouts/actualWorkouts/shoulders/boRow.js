import React, { Component } from 'react';
import { Link } from "react-router-dom";

class boRow extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Bentover Row</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/shoulders" className="btn btn-lg btn-info mr-2">Shoulders</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/shoulders/boRow.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Bend knees slightly and bend over bar with back straight, approximately horizontal. Grasp bar with wide overhand grip.</h6><h4>Execution</h4><h6>Keeping upper arm perpendicular to torso, pull barbell up toward upper chest until upper arms are just beyond horizontal. Return and repeat.</h6><h4>Comments</h4><h6>If upper arm travels closer than perpendicular to trunk, latissimus dorsi becomes involved. Elbows should be raised directly lateral to shoulders. Positioning torso at 45° is not sufficient angle to target rear deltoids. Keep torso bent over approximately horizontal. Knees are bent in effort to keep low back straight. If low back becomes rounded due to tight hamstrings, either knees should be bent more or torso may not be positioned as low. If low back is rounded due to poor form, deadlift weight to standing position and lower torso into horizontal position with knees bent and back straight. Much lighter resistance is required as Barbell Bent-over Row.</h6>
</div>
</div>
</div>

    )
  }
}

export default boRow