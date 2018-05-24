import React, { Component } from 'react';
import { Link } from "react-router-dom";

class back extends Component {
     

render() {
    return (
    
<div className="container">
<div className="workouts">
<h1>Back!</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
</div>
<br></br>
<div className="body-buttons">
{/* <Link to="/" className="btn btn-lg btn-primary mr-2"></Link> */}
{/* <Link to="/" className="btn btn-lg btn-primary mr-2"></Link> */}
<Link to="/ltPdn" className="btn btn-lg btn-primary mr-2">Lat Pulldown</Link>
{/* <Link to="/" className="btn btn-lg btn-primary mr-2"></Link> */}
<Link to="/iCross" className="btn btn-lg btn-primary mr-2">Iron Cross</Link>
<Link to="/sRow" className="btn btn-lg btn-primary mr-2">Seated Row</Link>
<Link to="/cgPdn" className="btn btn-lg btn-primary mr-2">Closegrip Pulldown</Link>
</div>
</div>
</div>

    )
  }
}

export default back