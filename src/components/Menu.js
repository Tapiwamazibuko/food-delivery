import React from "react";
import { Link, Form } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Menu(props){
    const dataElements = props.data.map(data => {
        return <div className="menu--item" key={data.id}>
                    <Form action={`${data.id}`} >
                        <FontAwesomeIcon  icon={data.icon} style={{color: "gray"}}/> 
                        <h3>{data.title}</h3>
                    </Form>
                </div>
    })
    return(
        <div id={`${props.id}`} className="menu--container">
            {dataElements}
        </div>
    )
}