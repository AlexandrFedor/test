import React from "react";
import "../../css/InputNav.css";
import DefaultPage from "../../components/DefaultPage";
import back from "../../img/back-svgrepo-com.svg";
import { NavLink, useNavigate } from "react-router-dom";


function InputNav(props) {

    const navigate = useNavigate();


  return (
    <DefaultPage
      page={
        <div className="inp_Main">
          <div className="on_Main">
            <img src={back} onClick={() => navigate(-1)} />
            <p>Назад</p>
          </div>
          <nav className="hov">
            <div className="category">
                <NavLink  to='/photo'>Фото</NavLink>
                <NavLink to='/music'>Музыка</NavLink>
                <NavLink to='/video'>Видео</NavLink>             
            </div>
          </nav>
          <div>{props.content}</div>
        </div>
      }
    />
  );
}

export default InputNav;
