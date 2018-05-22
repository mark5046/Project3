import React from "react";
import "./ChestButton.css";

const ChestButton = props => (
  
 
  <button
    title="Chest"
    onClick={props.onClick}
    className={`ChestButton ${props["data-value"]}`}
    {...props}
  >Chest</button>
  
);

export default ChestButton;
