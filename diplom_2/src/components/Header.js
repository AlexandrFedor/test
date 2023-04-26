import React, { useState } from "react";
import Logo from "./Logo";
import burger from "../img/header/Group 1.svg";
import UserAvatar from "./UserAvatar";
import "../css/DefaultPage.css";
import Navigation from "../pages/NavigationPages/Navigation";

function Header() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <header className="main-header">
      <div className="logoHeader">
        <Logo />
      </div>
      <img
        src={burger}
        alt="burger"
        className="burger-style"
        onClick={() => setModalActive(true)}
      />
      <UserAvatar classStyle = "avatar"/>
      <Navigation active={modalActive} setActive={setModalActive} />
    </header>
  );
}

export default Header;
