import React from "react";
import { faBasketShopping, faCartShopping, faClock, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
    return(
        <div className="footer--container">
            <div className="footer--text">
                <h5>IT'S QUICK & EASY</h5>
            </div>
            <div className="footer--title">
                <h1>How it works</h1>            
            </div>
            <div className="footer--buttons--container">
                <div className="footer--button">
                    <button>
                        <FontAwesomeIcon icon={faBasketShopping}/>
                    </button>
                    <h4>Select your market fresh seafood online at manettas.com.au</h4>
                </div>
                <div className="footer--button">
                    <button>
                        <FontAwesomeIcon icon={faCartShopping}/>
                    </button>
                    <h4>Our huge selection of produce can be processed exactly how you want</h4>
                </div>
                <div className="footer--button">
                    <button>
                        <FontAwesomeIcon icon={faClock}/>
                    </button>
                    <h4>Order before midnight for your choice of next day delivey</h4>
                </div>
                <div className="footer--button">
                    <button>
                        <FontAwesomeIcon icon={faTruck}/>
                    </button>
                    <h4>Freshness is gauranteed everytime with our specialist packaging</h4>
                </div>
            </div>
        </div>
    )
}