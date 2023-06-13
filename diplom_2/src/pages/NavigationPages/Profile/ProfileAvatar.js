import React, { useState } from "react";
import settings from "../../../img/Vector.svg";
import UserAvatar from "../../../components/UserAvatar";
import ProfileSettings from "./ProfileSettings";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../../config";
import avalogo from '../../../img/account-avatar-man-svgrepo-com.svg'


const ProfileAvatar = (props) => {
    
    const currentUser = useSelector((state) => state.user.currentUser);
    const [setting,setSetting] = useState(false)
    const [ava, setAva] = useState(false)

    const avatar = currentUser.avatar
    ? `${API_URL + currentUser.avatar}`
    : avalogo;
  return (
    <>
   
    <div className="avatar-container" >
    <img onClick={() => setAva(true)} className="avatar-profile" src={avatar}/>
      <Modal visible={ava} setVisible={setAva}>

        <img onClick={() => setAva(true)} className="avatar-profile" src={avatar}/>
      </Modal>
      {props.isAuth ? (
        <>
          <h1 style={{ marginBottom: "0" }}>
           {props.user.username}
            <img src={settings} onClick={() => setSetting(true)
            }/>
          </h1>
          <p>{props.user.description}</p>
        </>
      ) : (
        <>
          <h1 style={{ marginBottom: "0" }}>
            Гость
          </h1>
          <p>гость Lost Art</p>
        </>
      )}

      {props.isAuth && (
        <div className="linksProfile">
          {props.links.map((item) => {
            return <img key={item.id} src={item.img} />;
          })}
        </div>
      )}

    </div>   
       <ProfileSettings modal={setting} setModal={setSetting} userSetting={props.userSet} setUserSetting={props.setUserSet}/>
        </>
  );
};

export default ProfileAvatar;
