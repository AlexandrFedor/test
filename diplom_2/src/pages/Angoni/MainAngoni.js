import React from "react";
import NavHex from "../hexvgon/NavHex";
import classes from './mainAngoni.css'

const MainAngoni = () => {

    return(
        <div className="container">
        <div className="logo-container">
          <img className="pulse" ></img>
          <p>Angoni</p>
        </div>
        <div className="categories-block">
          <p>Художник</p>
          <NavHex style ={"links-block"} release ='/releaseHex' member = '/hexv'/>
        </div>
      </div>
    )
}


export default MainAngoni