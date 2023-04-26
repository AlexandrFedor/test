import React, { useState } from "react";
import "../../css/InputNav.css";
import DefaultPage from "../../components/DefaultPage";
import back from "../../img/back-svgrepo-com.svg";
import { Link } from "react-router-dom";


function InputNav(props) {


  return (
    <DefaultPage
      page={
        <div className="inp_Main">
          <div className="on_Main">
            <img src={back} />
            <p>На главную</p>
          </div>
          <nav className="hov">
            <div className="category">
                <Link to='/photo'>Фото</Link>
                <Link to='/music'>Музыка</Link>
                <Link to='/video'>Видео</Link>             
            </div>
          </nav>
          <div>{props.content}</div>
        </div>
      }
    />
  );
}

export default InputNav;
