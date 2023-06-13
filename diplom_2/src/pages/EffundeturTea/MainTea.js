import React from "react";
import tea from '../../img/effunder/logotea.png'
import text from '../../img/effunder/Group 84 (1).png'
import NavHex from "../hexvgon/NavHex";
import "../../css/effunder/mainTea.css"


function MainTea(){

    return(
        <div className="container-tea">
            <div className="text-fon" ></div>
        <div className="logotea-container">
          <img className="pulsetea" src={tea}></img>
          <p>пролитый чай</p>
        </div>
        <div className="categories-tea">
          <p>Музыкальная группа</p>
          <NavHex style ={"links-tea"} release={'/releaseTea'} member = {"/tea"}/>
        </div>
      </div>
    )
}


export default MainTea