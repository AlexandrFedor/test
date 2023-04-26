import React from "react";
import { Link } from "react-router-dom";
import iconLA from '../img/header/iconback.png'


function Logo () {
    return (
        <Link to="/">
            <img src={iconLA} alt="icon LA"/>
        </Link>
        
    )
}

export default Logo
