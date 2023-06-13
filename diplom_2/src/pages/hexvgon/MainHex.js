import React from "react";
import katana from "../../img/hex/HEXVGON_KATANA 1 (Traced).svg";
import "../../css/hexvgon/mainHex.css";
import NavHex from "./NavHex";

function MainHex() {
  return (
    <div className="container">
      <div className="logo-container">
        <img className="pulse" src={katana}></img>
        <p>HEXVGON</p>
      </div>
      <div className="categories-block">
        <p>Музыкальный продюсер в жанре электронной музыки</p>
        <NavHex style ={"links-block"} release ='/releaseHex' member = '/hexv'/>
      </div>
    </div>
  );
}

export default MainHex;
