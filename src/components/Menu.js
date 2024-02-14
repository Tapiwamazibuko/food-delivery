import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Menu(props){
    const dataElements = props.data.map(data => {
        return <div className="menu--item">
              <FontAwesomeIcon  icon={data.icon} style={{color: "gray"}}/> 
              <h3>{data.title}</h3>
        </div>
    })
    return(
        <div id={`${props.id}`} className="menu--container">
            {dataElements}
        </div>
    )
}