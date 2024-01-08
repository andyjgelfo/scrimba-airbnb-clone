import React from "react";
import "./Hero.css";
import heroImg from "../images/hero.png";

export default function Hero() {
    return (
        <div>
            <div id="imgPortion">
                <img src={heroImg} alt="Various images of happy AirBNB Guests" id="heroImg"></img>
            </div>

            <div id="textPortion">
                <h1>Online Experiences</h1>

                <h4>Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</h4>
            </div>


        </div>
    )
}
