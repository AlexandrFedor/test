import React from "react";
import { Link } from "react-router-dom";
import katana from "../../img/hex/HEXVGON_KATANA 1 (Traced).png";
import "../../css/hexvgon/mainHex.css";

function MainHex() {
  return (
    <div className="container">
      <div className="logo-container">
        <img src={katana}></img>
        <p>HEXVGON</p>
      </div>

      <div className="categories-block">
        <p>Музыкальный продюсер в жанре электронной музыке</p>
        <div className="links-block">
          <p>
            Релизы
          </p>
          <p>Об участнике</p>
          <p>Медиа</p>
          <p>Новости</p>
        </div>
      </div>
    </div>
  );
}

export default MainHex;
