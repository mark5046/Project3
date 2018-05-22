import React from "react";
import "./LegsButton.css";

const LegsButton = props => (
  
 
  <button
    title="Legs"
    onClick={props.onClick}
    className={`LegsButton ${props["data-value"]}`}
    {...props}
  >Legs</button>
  
);

export default LegsButton;
