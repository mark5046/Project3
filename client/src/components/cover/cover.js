import React, { Component } from "react";
import "./cover.css"

class Cover extends Component {
    render() {
        return (
            <div className="homepage-hero-module">
                <div className="video-container">
                    <div class="text">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h4 className="text-center" id="jumbotron-logo1">Beast Mode Activated</h4>
                        <h2 className="text-center" id="jumbotron-logo2">Welcome to FitneZONE</h2>
                        <p className="text-center" id="jumbotron-logo3">A community of people in love with fitness</p>
                    </div>
                    <div className="filter"></div>
                    <video muted={true} autoPlay loop className="fillWidth video" >
                        <source src={require("./fitnezone-main-cover.mp4")} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                </video>

                </div>
            </div>

        )
    };
}
export default Cover;