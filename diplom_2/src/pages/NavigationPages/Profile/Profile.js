import React, { useState } from "react";
import DefaultPage from "../../../components/DefaultPage";
import "./Profile.css";


import { members, works, links } from "./DataProfile";

import { useSelector } from "react-redux";
import ProfileAvatar from "./ProfileAvatar";
import ProfileList from "./ProfileList";



function Profile() {


  const [userSetting, setUserSetting] = useState({
        username: 'Пользователь',
        description: 'пользователь Lost Art',
        avatar: ''
    })


  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <DefaultPage
      page={
        <div className="profile-container">
         <ProfileAvatar userSet={userSetting} setUserSet={setUserSetting} user={userSetting}  links={links} isAuth={isAuth}/>
       <ProfileList members={members} works={works} isAuth={isAuth}/>
      
       
        </div>
       
      }
      
    />
  );
}

export default Profile;
