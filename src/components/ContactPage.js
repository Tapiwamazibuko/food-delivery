import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage(){
    return(
        <div>
            <div className="main--background" style={{backgroundImage: `url(office.jpg)`}}>
                <img src={require(`../images/office.jpg`)} style={{marginBottom: "0px"}}></img>
                <div>
                    <div className="main--text">
                        <div className="footer--button">
                            <button>
                                <FontAwesomeIcon icon={faPhone}/>
                            </button>
                        </div>
                        <h1 style={{fontSize: '60px'}}>Contact Us</h1>
                        <h4 style={{fontSize: '30px'}}>Market Fresh Seafood delivered to you door</h4>
                    </div>
                </div>
            </div>
            <div className="careers--text" style={{paddingBottom: '500px'}}></div>
        </div>
    )
}