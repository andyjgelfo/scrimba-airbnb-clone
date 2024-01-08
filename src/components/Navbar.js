import React from "react";
import airBnbLogo from "../images/logo.png";
import "./Navbar.css";


export default function Navbar() {
    return (
        <nav>

            <p id="navBody">
                <img src={airBnbLogo} alt="AirBNB Logo" id="logoImg"></img>
            </p>



        </nav>
    )
}