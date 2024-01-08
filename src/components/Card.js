import React from "react";
import katieZaferesImg from "../images/katie-zaferes.png";
import starImg from "../images/star.png";
import "./Card.css";

export default function Card(props) {
    return(
        <div id="cardContainer">
            
            <img src={props.img} alt="Card" class="cardImg"></img>

            <p id="starSpan" class="lightFont">
                <img src={starImg} alt="Pink Star" class="starImg"></img>
                <span>&nbsp;{props.rating} </span>
                <span class="grayText">&nbsp;({props.reviewCount}) • {props.country}</span>
            </p>

            <p class="lightFont cardTxtLine">
                {props.title}
            </p>

            <p class="cardTxtLine">
                <span><strong>From ${props.price}</strong></span>
                <span class="lightFont"> / person</span>
            </p>

        </div>
    )
}
