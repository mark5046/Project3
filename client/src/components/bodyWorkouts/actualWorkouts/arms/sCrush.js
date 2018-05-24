import React, { Component } from 'react';
import { Link } from "react-router-dom";

class sCrush extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Skull Crusher</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/arms" className="btn btn-lg btn-info mr-2">Arms</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/arms/sCrush.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Lie on bench with narrow overhand grip on barbell. Position barbell over forehead with arms extended.</h6><h4>Execution</h4><h6>Lower bar by bending elbows. As bar nears head, move elbows slightly back just enough to allow bar to clear around curvature of head. Extend arms. As bar clears head, reposition elbows to their former position until arms are fully extended. Repeat.</h6><h4>Comments</h4><h6>With arms fully extended, bar can be brought back over upper chest. Shoulders can be internally rotated between repetitions as needed to allow for relative release of tension in muscles. Barbell can be received from the floor or from rack either situated over abdomen or from behind head. Exercise can also be performed with straight barbell. Movement with cambared bar as shown above is also known as EZ Barbell or EZ Bar Lying Triceps Extension.</h6>
</div>
</div>
</div>

    )
  }
}

export default sCrush