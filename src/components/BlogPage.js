import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenClip, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function BlogPage(){
    return(
        <div>
            <div className="main--background" style={{backgroundImage: `url(city.jpg)`}}>
                <img src={require(`../images/city.jpg`)} style={{marginBottom: "0px"}}></img>
                <div>
                    <div className="main--text">
                        <div className="footer--button">
                            <button>
                                <FontAwesomeIcon icon={faPenClip}/>
                            </button>
                        </div>
                        <h1 style={{fontSize: '60px'}}>Blog</h1>
                        <h4 style={{fontSize: '30px'}}>Market Fresh Seafood delivered to you door</h4>
                    </div>
                </div>
            </div>
            <div className="blog--content">
                <div className="blog--item">
                    <div>
                        <h1 className="recipe--details">Filters</h1>
                        <div className="remove--flag">Remove All</div>
                    </div>
                    <div className="filter--items">
                        <div className="filter--flag">
                            Fish
                            <FontAwesomeIcon icon={faXmark}/>
                        </div>
                        <div className="filter--flag">
                            People
                            <FontAwesomeIcon icon={faXmark}/>
                        </div>
                        <div className="filter--flag">
                            Food
                            <FontAwesomeIcon icon={faXmark}/>
                        </div>
                        <div className="filter--flag">
                            Fishing
                            <FontAwesomeIcon icon={faXmark}/>
                        </div>
                        <div className="filter--flag">
                            Sourcing
                            <FontAwesomeIcon icon={faXmark}/>
                        </div>
                    </div>
                </div>
                <div className="blog--item">
                    <img src={require(`../images/fish.jpg`)}></img>
                </div>
                <div className="blog--item">
                    <img src={require(`../images/fishnet.jpg`)}></img>
                </div>
                <div className="blog--item">
                    <img src={require(`../images/market.jpg`)}></img>
                </div>
            </div>
        </div>
    )
}