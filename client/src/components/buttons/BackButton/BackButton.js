import React from "react";
import "./BackButton.css";

const BackButton = props => (
  
 
  <button
    title="Back"
    onClick={props.onClick}
    className={`BackButton ${props["data-value"]}`}
    {...props}
  >Back</button>
  
);

export default BackButton;
