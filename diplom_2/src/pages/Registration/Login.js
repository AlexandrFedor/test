
import React from "react";
import { Link } from "react-router-dom";
import "../../css/Login.css";

function Login() {
  return (
    <div className="all-container">
      <div className="body-container">
        <div className="login_form_container">
          <div className="login_form">
            <h2>Вход</h2>
            <div className="input_group">
              <input
                type="text"
                placeholder="Логин"
                className="input_text"
                autocomplete="off"
              />
            </div>
            <div className="input_group">
              <input
                type="password"
                placeholder="Пароль"
                className="input_text"
                autocomplete="off"
              />
            </div>
            <div className="button_group" id="login_button">
              <Link to="/creatch">Подтвердить</Link>
            </div>
            <div className="fotterLog">
              <Link to="/forgotpass">Забыли пароль?</Link>
              <Link to="/registration">Регистрация</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
