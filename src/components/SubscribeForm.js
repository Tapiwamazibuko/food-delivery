import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SubscribeForm(){
    const [email, setEmail] = React.useState("");

    function handleChange(event){
        const {name, value, type} = event.target
        setEmail(value)
    }
    return(
        <div className="form--container">
            <div className="form--text">
                <h5>SUBSCRIBE TODAY</h5>
            </div>
            <div className="form--title">
                <h2>10% OFF your First Order!</h2>
            </div>
            <div className="form">
                <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input
                        type="text" id="email"
                        className="form--input"
                        value={email}
                        name="email"
                        onChange={handleChange}
                        placeholder="Enter your Email Address..."
                    ></input>
                    <button type="submit">Subscribe</button>
                </span>
            </div>
        </div>
    )
}