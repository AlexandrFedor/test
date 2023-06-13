import React from "react";
import { Link } from "react-router-dom";
import "../../css/hexvgon/mainHex.css";


function NavHex({style, release,member}) {

    return(
<div className={style}>
          <Link to={release}>Релизы</Link>
          <Link to={member}>Об участнике</Link>
          <Link to="/photo">Медиа</Link>
          <Link to="/news">Новости</Link>
        </div>
    )
}

export default NavHex;