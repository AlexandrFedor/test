import React, { useState } from "react";
import Logo from "./Logo";
import burger from "../img/header/Group 1.svg";
import UserAvatar from "./UserAvatar";
import "../css/DefaultPage.css";
import Navigation from "../pages/NavigationPages/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../reducers/userReducer";

function Header(props) {

    const isAuth = useSelector((state) => state.user.isAuth);
    const dispatch = useDispatch()
  const [modalActive, setModalActive] = useState(false);
  return (
    <header className="main-header">
      <div className="logoHeader">
        <Logo />
      </div>
      <img
        src={burger}
        className={`burger-style ${props.style}`}
        onClick={() => {
          setModalActive(true);
          document.body.style.overflow = "hidden";
        }}
      />
         <div className="logouts">
         {!isAuth && <Link to="/login">Войти</Link>}
         {!isAuth && <Link to="/registration">Регистрация</Link>}
     {isAuth &&  <p onClick={() => dispatch(logout())}>Выход</p>}
      </div>
      
      {isAuth && <UserAvatar classStyle="avatar" /> }
   
     
      <Navigation active={modalActive} setActive={setModalActive} />
    </header>
  );
}

export default Header;
