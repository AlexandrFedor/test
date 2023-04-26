import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loggin } from "../../store/userSlice";
import { signIn, signUp } from "../../store/variableSlice";
import config from "../../config.json";
import axios from "axios";
import Cookies from "js-cookie";

import "../../css/Registration.css";
import "../../css/Login.css";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const clearData = () => {
    dispatch(signIn(false));
    dispatch(signUp(false));
    setEmail("");
    setPassword("");
  };
  const onChangeHandle = (e, type) => {
    switch (type) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "username":
        setUsername(e.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmit = (type) => {
    switch (type) {
      case "loggin":
        axios
          .request({
            method: "post",
            url: `${config.ip.api}/profile`,
            data: {
              method: "login",
              auth: {
                email: email.trim(),
                password: password,
              },
            },
          })
          .then((res) => {
            if (!res.data.error) {
              console.log(res.data);
              Cookies.set("JWT", res.data.jwt, { expires: 30, path: "/" });
              dispatch(loggin(res.data));
              clearData();
            } else {
              console.log(res.data.error);
            }
          });
        break;
      case "reg":
        axios
          .request({
            method: "post",
            url: `${config.ip.api}/profile`,
            data: {
              method: "register",
              auth: {
                login: username.trim(),
                email: email.trim(),
                password: password,
              },
            },
          })
          .then((res) => {
            if (!res.data.error) {
              dispatch(loggin(res.data));
              clearData();
              Cookies.set("JWT", res.data.jwt, { expires: 30, path: "/" });
            } else {
              console.log(res.data.error);
            }
          });
        break;
      default:
        break;
    }
  };

  return (
    <>
      {useSelector((state) => state.var.signIn) ? (
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
      ) : (
        false
      )}

      {useSelector((state) => state.var.signUp) ? (
        <div className="all-container">
          <div className="body-container">
            <div className="reg_form_container">
              <form encType="multipart/form-data" className="reg_form">
                <h2>Регистрация</h2>
                <div className="input_group">
                  <input
                    onChange={(e) => onChangeHandle(e, "email")}
                    value={email}
                    type="email"
                    placeholder="Почта"
                    className="input_text"
                    autoComplete="off"
                  />
                </div>
                <div className="input_group">
                  <input
                    onChange={(e) => onChangeHandle(e, "username")}
                    value={username}
                    type="username"
                    placeholder="Логин"
                    className="input_text"
                    autoComplete="off"
                  />
                </div>
                <div className="input_group">
                  <input
                    onChange={(e) => onChangeHandle(e, "password")}
                    value={password}
                    type="password"
                    placeholder="Пароль"
                    className="input_text"
                    autoComplete="off"
                  />
                </div>
                <div className="button_group" id="reg_button">
                  <Link
                    disabled={!(email && password && username)}
                    to="/creatch"
                  >
                    Подтвердить
                  </Link>
                </div>
                <div className="fotterReg">
                  <Link onClick={(e) => clearData()} to="/creatch">
                    Продолжить без регистрации
                  </Link>
                  <Link to="/login" onClick={(e) => onSubmit("reg")}>
                    Вход
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        false
      )}
    </>
  );
}

export default Registration;
