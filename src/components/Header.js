import React from "react";
import menu from "../images/menu-icon.png";
import search from "../images/search-icon.png";
import location from "../images/location-icon.png";
import user from "../images/user-icon.png";
import cart from "../images/cart-icon.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Header(props){
    function openSeafoodNav() {
        document.getElementById("seafoodMenu").style.height === "450px" ? document.getElementById("seafoodMenu").style.display = "none" : document.getElementById("seafoodMenu").style.display = "grid";
        document.getElementById("seafoodMenu").style.height = document.getElementById("seafoodMenu").style.height === "450px" ? "0px" : "450px" ;
      }

    function openCart() {
        document.getElementById("cart").style.width === "500px" ? document.getElementById("cart").style.display = "none" : document.getElementById("cart").style.display = "flex";
        document.getElementById("cart").style.width = document.getElementById("cart").style.width === "500px" ? "0px" : "500px" ;
        document.getElementById("cart").style.height = "100%";
      }

    function openSearch() {
        document.getElementById("search").style.height === "600px" ? document.getElementById("search").style.display = "none" : document.getElementById("search").style.display = "flex";
        document.getElementById("search").style.height = document.getElementById("search").style.height === "600px" ? "0px" : "600px" ;
        document.getElementById("search").style.width = "60%";
      }

    return (
    <nav className="nav--container">
        <div className="nav--left">
            <img src={menu} className="nav--logo"></img>
            <Link to={`/`}>
                <h1>MANETTAS</h1>
            </Link>
        </div>
        <div className="nav--center">
            <div>
                <h3>Seafood</h3>
                <FontAwesomeIcon icon={faChevronDown} onClick={() => {props.onClick("seafood"); openSeafoodNav()}}/>
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
                <FontAwesomeIcon icon={faChevronDown} onClick={() => {props.onClick("more"); openSeafoodNav()}} />
            </div>
            <div>
                <h3>Discover</h3>
            </div>
        </div>
        <div className="nav--right">
            <img src={search} className="nav--logo" onClick={openSearch}></img>
            <img src={location} className="nav--logo"></img>
            <img src={user} className="nav--logo"></img>
            <img src={cart} className="nav--logo" onClick={openCart}></img>
        </div>
    </nav>
    )
}