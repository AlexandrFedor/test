import React, { useState } from "react";
import Logo from "./Logo";
import burger from "../img/header/Group 1.svg";
import avalogo from '../img/account-avatar-man-svgrepo-com.svg'
import "../css/DefaultPage.css";
import Navigation from "../pages/NavigationPages/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../reducers/userReducer";
import { API_URL } from "../config";

function Header(props) {
  const isAuth = useSelector((state) => state.user.isAuth);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false);

  const avatar = currentUser.avatar
    ? `${API_URL + currentUser.avatar}`
    : avalogo;
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
        {isAuth && <p onClick={() => dispatch(logout())}>Выход</p>}
      </div>

      {isAuth &&<Link to="/profile">
      <img className="avatar"  src={avatar} alt="ava" />
      </Link> }

      <Navigation active={modalActive} setActive={setModalActive} />
    </header>
  );
}

export default Header;
