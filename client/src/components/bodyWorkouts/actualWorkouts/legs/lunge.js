import React, { Component } from 'react';
import { Link } from "react-router-dom";

class lunge extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Lunge</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/legs" className="btn btn-lg btn-info mr-2">Legs</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/legs/lunge.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Stand with dumbbells grasped to sides.</h6><h4>Execution</h4><h6>Lunge forward with first leg. Land on heel then forefoot. Lower body by flexing knee and hip of front leg until knee of rear leg is almost in contact with floor. Return to original standing position by forcibly extending hip and knee of forward leg. Repeat by alternating lunge with opposite leg.</h6><h4>Comments</h4><h6>Keep torso upright during lunge; flexible hip flexors are important. Lead knee should point same direction as foot throughout lunge. A long lunge emphasizes Gluteus Maximus; short lunge emphasizes Quadriceps.</h6>
</div>
</div>
</div>

    )
  }
}

export default lunge