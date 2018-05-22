import React from "react";

const Nav = props => (
    <nav>
    <div className="nav-wrapper">
      <a href="http://www.fitnesshand.com/" className="brand-logo center">FitnessHAND</a>
      <ul id="nav-mobile" className="left">
        <li><a href="http://www.fitnesshand.com/">Fitness</a></li>
        <li><a href="http://www.fitnesshand.com/">Nutrition</a></li>
        <li><a href="http://www.fitnesshand.com/">News & Articles</a></li>
      </ul>
      <ul id="nav-mobile" className="right">
        <li><a href="http://www.fitnesshand.com/">Profile</a></li>
      </ul>
    </div>
  </nav>


);

export default Nav;
