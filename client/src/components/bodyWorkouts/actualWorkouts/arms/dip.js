import React, { Component } from 'react';
import { Link } from "react-router-dom";

class dip extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Dip</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/arms" className="btn btn-lg btn-info mr-2">Arms</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/arms/dip.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6></h6><h4>Execution</h4><h6></h6><h4>Comments</h4><h6>Bench height should allow for full range of motion.><strong>Easier: </strong>Resistance can be reduced by placing heels on floor.</h6><h6><strong>Harder: </strong>Weight can be placed on lap to increase resistance or movement can be performed on parallel bars.</h6>
</div>
</div>
</div>

    )
  }
}

export default dip