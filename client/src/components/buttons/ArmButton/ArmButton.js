import React from "react";
import "./ArmButton.css";

const ArmButton = props => (
  
 
  <button
    title="Arms"
    onClick={props.onClick}
    className={`ArmButton ${props["data-value"]}`}
    {...props}
  >Arms</button>
  
);

// const BodyButtonShoulders = props => (
  
 
//   <button
//     title="Shoulders"
//     onClick={props.onClick}
//     className={`BodyButtons ${props["data-value"]}`}
//     {...props}
//   >Shoulders</button>
  
// );

export default ArmButton;
