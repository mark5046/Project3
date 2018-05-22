import React from "react";
import "./ShoulderButton.css";

const ShoulderButton = props => (
  
 
  <button
    title="Shoulders"
    onClick={props.onClick}
    className={`ShoulderButton ${props["data-value"]}`}
    {...props}
  >Shoulders</button>
  
);

export default ShoulderButton;