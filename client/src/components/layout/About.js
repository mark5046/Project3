import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./About.css";

class About extends Component {
  render() {
    return (

      <div class="container">
        <div className="about">
          <h1>About the developers behind your workout app</h1>

          <hr></hr>

          <div class="row">
            <div class="col sm12 m6">
              <img src="images/about-images/Photo_Mark.png" className='about_img'></img>
              <h4>Mark Iudice</h4>
              {/* <p>Lead Developer</p> */}
              <p>Full Stack Developer</p>
              <p>Learned to code at Rutgers Coding Bootcamp. Been coding since ealry 2018.</p>
              <p>Located in NJ</p>
              <a class="gitLink" href="https://github.com/mark5046">Github</a>
            </div>
            <div class="col sm12 m6">
              <img src="https://i.pinimg.com/originals/ff/a7/18/ffa71850a5568ca6663868687faabb97.jpg" class='circle responsive-img' id='about_img'></img>
              <h4>Denis Rodriguez-Ramos</h4>
              {/* <p>Backend Developer</p> */}
              <p>Full Stack Developer</p>
              <p>Learned to code at Rutgers Coding Bootcamp. Been coding since ealry 2018.</p>
              <p>Located in NJ</p>
              <a class="gitLink" href="https://github.com/ventolucci">Github</a>
            </div>
          </div>

          <div class="row">
            <div class="col sm12 m6">
              <img src="images/King_Kong.png" class='circle responsive-img' id='about_img'></img>
              <h4>Armando Vargas</h4>
              {/* <p>Backend Developer</p> */}
              <p>Full Stack Developer</p>
              <p>Learned to code at Rutgers Coding Bootcamp. Been coding since ealry 2018.</p>
              <p>Located in NJ</p>
              <a class="gitLink" href="https://github.com/MandoMalchus">Github</a>
            </div>
            <div class="col sm12 m6">
              <img src="images/about-images/Photo_Chris.png" class='circle responsive-img' id='about_img'></img>
              <h4>Chris Bacani</h4>
              {/* <p>Frontend Developer</p> */}
              <p>Full Stack Developer</p>
              <p>Learned to code at Rutgers Coding Bootcamp. Been coding since ealry 2018.</p>
              <p>Located in NJ</p>
              <a class="gitLink" href="https://github.com/crsbcn">Github</a>
            </div>
          </div>

          <br></br><br></br><br></br>

          <div class="row">
            <div class="col sm12 m6">
              <img src="https://i.pinimg.com/originals/ff/a7/18/ffa71850a5568ca6663868687faabb97.jpg" class='circle responsive-img' id='about_img'></img>
              <h4>Anant Patel</h4>
              {/* <p>Backend Developer</p> */}
              <p>Full Stack Developer</p>
              <p>Learned to code at Rutgers Coding Bootcamp. Been coding since ealry 2018.</p>
              <p>Located in NJ</p>
              <a class="gitLink" href="https://github.com/Anantpatel123">Github</a>
            </div>
          </div>

        </div>
      </div>

    )
  }
}

export default About;