import React, { lazy, Suspense, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import CreativityChoice from "./pages/Main/CreactivityChoice/CreativityChoice";
import IntroPage from "./pages/Main/IntroPage";
import Login from "./pages/Registration/Login";
import Registration from "./pages/Registration/Registration";
//import Photo from "./pages/NavigationPages/Photo";
//import Music from "./pages/NavigationPages/Music";
//import Video from "./pages/NavigationPages/Video";
import NotFoundPage from "./components/NotFoundPage";
import Links from "./pages/NavigationPages/Links";
//import News from "./pages/NavigationPages/News";
import Profile from "./pages/NavigationPages/Profile/Profile";

import MainHex from "./pages/hexvgon/MainHex";
import ReliseHex from "./pages/hexvgon/ReliseHex";
import AboutHex from "./pages/hexvgon/AboutHex";

import MainTea from "./pages/EffundeturTea/MainTea";
import AboutTea from "./pages/EffundeturTea/AboutTea";
import ReleaseTea from "./pages/EffundeturTea/ReleaseTea";

import MainAngoni from "./pages/Angoni/MainAngoni";

import MainKors from "./pages/Kors Naike/MainKors";
import AboutKors from "./pages/Kors Naike/AboutKors";
import ReleaseKors from "./pages/Kors Naike/ReleaseKors";
import Loader from "./components/UI/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./actions/user";

const Music = lazy(() => import("./pages/NavigationPages/Music"));
const Photo = lazy(() => import("./pages/NavigationPages/Photo"));
const Video = lazy(() => import("./pages/NavigationPages/Video"));
const News = lazy(() => import("./pages/NavigationPages/News"));

function App() {
  const routes = [
    {
      path: "/",
      Component: IntroPage,
    },
    {
      path: "*",
      Component: NotFoundPage,
    },
    {
      path: "/login",
      Component: Login,
    },
    {
      path: "/registration",
      Component: Registration,
    },
    {
      path: "/creatch",
      Component: CreativityChoice,
    },
    {
      path: "/music",
      Component: Music,
    },
    {
      path: "/photo",
      Component: Photo,
    },
    {
      path: "/video",
      Component: Video,
    },
    {
      path: "/links",
      Component: Links,
    },
    {
      path: "/news",
      Component: News,
    },
    {
      path: "/profile",
      Component: Profile,
    },
    {
      path: "/mainhex",
      Component: MainHex,
    },
    {
      path: "/releaseHex",
      Component: ReliseHex,
    },
    {
      path: "/hexv",
      Component: AboutHex,
    },
    {
      path: "/maintea",
      Component: MainTea,
    },
    {
      path: "/tea",
      Component: AboutTea,
    },
    {
      path: "/releaseTea",
      Component: ReleaseTea,
    },
    {
      path: "/mainKors",
      Component: MainKors,
    },
    {
      path: "/kors",
      Component: AboutKors,
    },
    {
      path: "/releaseKors",
      Component: ReleaseKors,
    },
    {
      path: "/mainangoni",
      Component: MainAngoni,
    },
  ];

  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<IntroPage />} />
        {!isAuth && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </>
        )}
        <Route path="/creatch" element={<CreativityChoice />} />

        <Route path="/music" element={<Music />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/video" element={<Video />} />
        <Route path="/links" element={<Links />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mainhex" element={<MainHex />} />
        <Route path="/releaseHex" element={<ReliseHex />} />
        <Route path="/hexv" element={<AboutHex />} />
        <Route path="/maintea" element={<MainTea />} />
        <Route path="/tea" element={<AboutTea />} />
        <Route path="/releaseTea" element={<ReleaseTea />} />
        <Route path="/mainangoni" element={<MainAngoni />} />
        <Route path="/mainKors" element={<MainKors />} />
        <Route path="/kors" element={<AboutKors />} />
        <Route path="/releaseKors" element={<ReleaseKors />} />

        {/*<Route path="/" element={} />*/}
      </Routes>
    </Suspense>
  );
}

export default App;

//  {
//    path: "/",
//    Component: ,
//  },

//    const dispatch = useDispatch()

//  useEffect(() => {
//    let JWT = Cookies.get('JWT')
//    if (JWT) {
//      axios.request({
//        method: "post",
//        url: `${config.ip.api}/profile/user`,
//        data: {
//          method: "jwt",
//          jwt: JWT
//        }
//      }).then(res => {
//        if (!res.data.error) {
//          dispatch(loggin(res.data))
//          Cookies.set('JWT', res.data.jwt, { expires: 30, path: '/' })
//        }
//      })
//    }
//  })
