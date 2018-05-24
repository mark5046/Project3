import React, { Component } from 'react';
import { Link } from "react-router-dom";

class cRaise extends Component {
     

render() {
    return (
  
<div className="container">  
<div className="workouts">
<h1>Calf Raise</h1>
<div>
<Link to="/workouts" className="btn btn-lg btn-info mr-2">Workouts</Link>
<Link to="/legs" className="btn btn-lg btn-info mr-2">Legs</Link>
</div>
<br></br>
<div className="workout">
<img src='images/gifs/legs/cRaise.gif'></img>
<h3>Instructions</h3><h4>Preperation</h4><h6>Stand facing safety barbell on rack upper chest height and calf block on floor just below. Position toes and balls of feet on calf block with arches and heels extending off. Place hands on bar to each sides or on vertical rack bars. Position head in yoke with padded bar around shoulders. Dismount bar from rack by standing erect with safety bar, away yet close to rack.</h6><h4>Execution</h4><h6>Raise heels by extending ankles as high as possible. Lower heels by bending ankles until calves are stretched. Repeat.</h6><h4>Comments</h4><h6>Position rack just below lowest range of motion. Calf block should be positioned so safety bar is close to but does not make contact with rack. Keep knees straight throughout exercise or bend knees slightly only during stretch. Quadriceps serve as synergists muscle if knees are bent slightly during stretch.</h6>
</div>
</div>
</div>

    )
  }
}

export default cRaise