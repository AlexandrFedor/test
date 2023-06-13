import React from "react";
import { Link } from "react-router-dom";
import '../css/ButtonMain.css'

function ButtonMain(props){
    return (
       <Link to={props.link} {...props} className="green">{props.title}</Link> 
    )
    
}

export default ButtonMain