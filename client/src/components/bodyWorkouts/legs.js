import React, { Component } from 'react';
import { Link } from "react-router-dom";

class legs extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Legs!</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
</div>
<br></br>
<div className="body-buttons">
<button onClick={this.handleBtnClick} data-value="button1">Curls</button>
<button onClick={this.handleBtnClick} data-value="button2">Yo boy get those arms big</button>
<button onClick={this.handleBtnClick} data-value="button3">17 inch</button>
<button onClick={this.handleBtnClick} data-value="button4">bubblegum</button>
</div>
</div>
</div>

    )
  }
}

export default legs