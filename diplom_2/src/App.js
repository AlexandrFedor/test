import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import axios from "axios";
import {loggin} from "./store/userSlice"
import config from './config.json'


import { Routes, Route, Link } from "react-router-dom";


import CreativityChoice from "./pages/Main/CreativityChoice";
import IntroPage from "./pages/Main/IntroPage";
import Login from "./pages/Registration/Login";
import Registration from "./pages/Registration/Registration";
import AuthorsChoice from "./pages/Main/AuthorsChoice";
import Photo from "./pages/NavigationPages/Photo";
import Music from "./pages/NavigationPages/Music";
import Video from "./pages/NavigationPages/Video";
import NotFoundPage from "./components/NotFoundPage";
import Links from "./pages/NavigationPages/Links";
import News from "./pages/NavigationPages/News";
import Profile from "./pages/NavigationPages/Profile";
import MainHex from "./pages/hexvgon/MainHex";

function App() {

    const dispatch = useDispatch()

  useEffect(() => {
    let JWT = Cookies.get('JWT')
    if (JWT) {
      axios.request({
        method: "post",
        url: `${config.ip.api}/profile/user`,
        data: {
          method: "jwt",
          jwt: JWT
        }
      }).then(res => {
        if (!res.data.error) {
          dispatch(loggin(res.data))
          Cookies.set('JWT', res.data.jwt, { expires: 30, path: '/' })
        }
      })
    }
  })
  return (
    <>

      <Routes>
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/" element={<IntroPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        
        <Route path="/creatch" element={<CreativityChoice />} />
        <Route path="/authorch" element={<AuthorsChoice />} />

        <Route path="/music" element={<Music />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/video" element={<Video />} />
        <Route path="/links" element={<Links />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mainhex" element={<MainHex/>}/>
      </Routes>
    </>
  );
}

export default App;
