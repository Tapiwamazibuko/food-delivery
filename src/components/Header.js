import React from "react";
import menu from "../images/menu-icon.png";
import search from "../images/search-icon.png";
import location from "../images/location-icon.png";
import user from "../images/user-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Header(){
    function openSeafoodNav() {
        document.getElementById("seafoodMenu").style.height === "450px" ? document.getElementById("seafoodMenu").style.display = "none" : document.getElementById("seafoodMenu").style.display = "grid";
        document.getElementById("seafoodMenu").style.height = document.getElementById("seafoodMenu").style.height === "450px" ? "0px" : "450px" ;
      }

    return (
    <nav className="nav--container">
        <div className="nav--left">
            <img src={menu} className="nav--logo"></img>
            <h1>MANETTAS</h1>
        </div>
        <div className="nav--center">
            <div>
                <h3>Seafood</h3>
                <FontAwesomeIcon icon={faChevronDown} onClick={openSeafoodNav}/>
            </div>
            <div>
                <h3>Meat</h3>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div>
                <h3>Fruits & Vegtables</h3>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div>
                <h3>More</h3>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <div>
                <h3>Discover</h3>
            </div>
        </div>
        <div className="nav--right">
            <img src={search} className="nav--logo"></img>
            <img src={location} className="nav--logo"></img>
            <img src={user} className="nav--logo"></img>
        </div>
    </nav>
    )
}