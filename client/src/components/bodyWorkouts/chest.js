import React, { Component } from 'react';
import { Link } from "react-router-dom";

class chest extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Chest!</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
</div>
<br></br>
<div className="body-buttons">
<Link to="/bPress" className="btn btn-lg btn-danger mr-2">Bench Press</Link>
<Link to="/cDip" className="btn btn-lg btn-danger mr-2">Chest Dip</Link>
<Link to="/fly" className="btn btn-lg btn-danger mr-2">Fly</Link>
<Link to="/pOver" className="btn btn-lg btn-danger mr-2">Pullover</Link>
<Link to="/pUp" className="btn btn-lg btn-danger mr-2">Push-up</Link>
<Link to="/pkUp" className="btn btn-lg btn-danger mr-2">Pike Push-up</Link>
<Link to="/pDec" className="btn btn-lg btn-danger mr-2">Pec Dec</Link>
</div>
</div>
</div>

    )
  }
}

export default chest