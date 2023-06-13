import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import "../../css/Login.css";
import axios from "axios";
import {useDispatch} from "react-redux"
import { login } from "../../actions/user";
import { useSelector } from "react-redux";


function Login() {

    const isAuth = useSelector((state) => state.user.isAuth);
const navigate = useNavigate()

function handleClick () { 
         navigate("/creatch") 
}

  

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [userDirty, setUserDirty] = useState(false);
  const [passDirty, setPassDirty] = useState(false);

  const [userError, setUserError] = useState("Логин не может быть пустым");
  const [passError, setPassError] = useState("Пароль не может быть пустым");
  const [formValid, setFormValid] = useState(false);

  const dispatch = useDispatch()

  useEffect(() => {
    if (userError || passError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [userError, passError]);

  const userHandler = (e) => {
    setUsername(e.target.value);
    if (e.target.value.length < 1 || e.target.value.length > 12) {
      {
        setUserError("Логин должен быть длинее 1 и меньше 12 символов");
      }
      if (!e.target.value) {
        setUserError("Логин не может быть пустым");
      }
    } else {
      setUserError("");
    }
  };

 

  const passHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 10) {
      {
        setPassError("Пароль должен быть длинее 4 и меньше 10 символов");
      }
      if (!e.target.value) {
        setPassError("Пароль не может быть пустым");
      }
    } else {
      setPassError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "user":
        setUserDirty(true);
        break;
      case "password":
        setPassDirty(true);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    const user = await axios.post("http://localhost:5000/auth/login", userData);
    console.log(user.data);
  };



  return (
    <div className="all-container">
      <div className="body-container">
        <div className="login_form_container">
          <form onSubmit={handleSubmit} className="login_form">
            <h2>Вход</h2>
            {userDirty && userError && (
              <div style={{ color: "red" }}>{userError}</div>
            )}
            <div className="input_group">
              <input
                onChange={(e) => userHandler(e)}
                onBlur={(e) => blurHandler(e)}
                name="user"
                value={username}
                type="username"
                placeholder="Логин"
                className="input_text"
                autocomplete="off"
              />
            </div>
            <br></br>
            {passDirty && passError && (
              <div style={{ color: "red" }}>{passError}</div>
            )}
            <div className="input_group">
              <input
                onChange={(e) => passHandler(e)}
                value={password}
                onBlur={(e) => blurHandler(e)}
                name="password"
                type="password"
                placeholder="Пароль"
                className="input_text"
                autocomplete="off"
              />
            </div>
         
            <div className="button_group" id="login_button">  
             
                <button onClick={() => { 
                    dispatch(login(username, password))
                 handleClick()
                    }} disabled={!formValid} type="submit">
                  Войти
                </button>
            
            </div>
            <div className="fotterLog">
              <Link to="/registration">Регистрация</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
