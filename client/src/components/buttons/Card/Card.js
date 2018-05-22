import React from "react";
import ArmButton from "../ArmButton";
import ShoulderButton from "../ShoulderButton";
import ChestButton from "../ChestButton";
import BackButton from "../BackButton";
import LegsButton from "../LegsButton";
import AbsButton from "../AbsButton";
import "./Card.css";

const Card = props => (
  <div
    className="card"
    style={{
      backgroundImage: props.image ? `url(${props.image})` : "none"
    }}
  >
    <ShoulderButton
      onClick={props.handleBtnClick}
      data-value="shoulders"
    />
    <ArmButton
      onClick={props.handleBtnClick}
      data-value="arms"
    />
    <ChestButton
      onClick={props.handleBtnClick}
      data-value="chest"
    />
    <BackButton
      onClick={props.handleBtnClick}
      data-value="back"
    />
    <LegsButton
      onClick={props.handleBtnClick}
      data-value="legs"
    />
    <AbsButton
      onClick={props.handleBtnClick}
      data-value="abs"
    />
  </div>
);

export default Card;
