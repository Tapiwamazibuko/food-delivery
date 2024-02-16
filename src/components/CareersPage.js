import React from "react";
import startup from "../images/startup.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";

const style = {
    color: "#C90D12",
    fontStyle: "italic", 
    marginLeft: "12px"
}

export default function CareersPage(){
    return(
        <div>
            <div className="main--background" style={{backgroundImage: `url(startup.jpg)`}}>
                <img src={require(`../images/startup.jpg`)} style={{marginBottom: "0px"}}></img>
                <div>
                    <div className="main--text">
                        <div className="footer--button">
                            <button>
                                <FontAwesomeIcon icon={faLaptop}/>
                            </button>
                        </div>
                        <h1 style={{fontSize: '60px'}}>Careers</h1>
                        <h4 style={{fontSize: '30px'}}>The Manettas Family is Growing</h4>
                    </div>
                </div>
            </div>
            <div className="careers--text" style={{paddingBottom: '10px'}}>
                    <h1>Great companies are built by</h1>
                    <h1 style={{color: "#C90D12", fontStyle: "italic", marginLeft: "12px"}}>great people.</h1>
            </div>
            <div className="careers--text" style={{paddingTop: '10px'}}>
                    <h1>Come create share and</h1>
                    <h1 style={style}>Join our Team</h1>
            </div>
        </div>
    )
}