import React from "react";
import ButtonOnDark from "../button-on-dark/button-on-dark.component";

import './talk-about.styles.scss'

const TalkAbout = () => {
    return (
        <div className="talk-about">
            <div className="talk-about__text">
                <h2 className="talk-about__text__title">
                    <span>Let’s talk about</span> 
                    <span>your project</span> 
                </h2>
                <p  className="talk-about__text__info">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>
           <ButtonOnDark title="Get in touch"/>
        </div>
    )
}

export default TalkAbout;