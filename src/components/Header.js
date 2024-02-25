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
    function openSeafoodNav(dropdown) {
        document.getElementById("seafoodMenu").style.height === "450px" ? document.getElementById("seafoodMenu").style.display = "none" : document.getElementById("seafoodMenu").style.display = "grid";
        document.getElementById("seafoodMenu").style.height = document.getElementById("seafoodMenu").style.height === "450px" ? "0px" : "450px" ;
        document.getElementById(dropdown).style.color  = document.getElementById(dropdown).style.color == "rgb(201, 13, 18)" ? "#000000" : "#C90D12";
        console.log(document.getElementById(dropdown).style.color )
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
                <FontAwesomeIcon id="seafood" icon={faChevronDown} onClick={() => {props.onClick("seafood"); openSeafoodNav("seafood")}}/>
            </div>
            <div>
                <h3>Meat</h3>
                <FontAwesomeIcon id="meat" icon={faChevronDown} />
            </div>
            <div>
                <h3>Fruits & Vegtables</h3>
                <FontAwesomeIcon id="fruit&veg" icon={faChevronDown} />
            </div>
            <div>
                <h3>More</h3>
                <FontAwesomeIcon 
                    id="more" 
                    icon={faChevronDown} 
                    onClick={() => {props.onClick("more"); openSeafoodNav("more")}} 
                />
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