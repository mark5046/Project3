import React from "react";

const Cover = props => (
    <div className="homepage-hero-module">
        <div className="video-container">
            <div className="filter"></div>
            <video autoplay muted loop className="fillWidth video">
                <source src="../../public/assets/fitnezone-main-cover.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                </video>

        </div>
    </div>
)

export default Cover;