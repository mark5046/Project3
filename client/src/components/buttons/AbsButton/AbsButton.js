import React from "react";
import "./AbsButton.css";

const AbsButton = props => (
  
 
  <button
    title="Abs"
    onClick={props.onClick}
    className={`AbsButton ${props["data-value"]}`}
    {...props}
  >Abs</button>
  
);

export default AbsButton;
