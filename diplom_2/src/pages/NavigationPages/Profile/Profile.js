import React, { useState } from "react";
import DefaultPage from "../../../components/DefaultPage";
import "./Profile.css";
import UserAvatar from "../../../components/UserAvatar";
import setting from "../../../img/Vector.svg";
import { members, works, links } from "./DataProfile";
import add from "../../../img/UI/add-plus-circle-svgrepo-com.svg";
import Modal from "./Modal.js";
import { ModalWorks,ModalMembers } from "./ModalsProfile";
function Profile() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <DefaultPage
      page={
        <div className="profile-container">
          <div className="avatar-container">
            <UserAvatar classStyle="avatar-profile" />
            <h1 style={{marginBottom:"0"}}>
              Пользователь
              <img src={setting} />
            </h1>
            <p>пользователь Lost Art</p>
            <div>
              {links.map((item) => {
                return <img key={item.id} src={item.img} />;
              })}
            </div>
          </div>
          <div className="favorite-block">
            <div className="favorite-members">
              <h2>Любимые участники:</h2>
              <div className="members">
                {members.map((item) => {
                  return (
                    <div key={item.id}>
                      <img src={item.img} />
                      <p>{item.artist}</p>
                    </div>
                  );
                })}
              </div>
              <div className="add-btn">
                <img onClick={() => setOpen(true)} src={add} />
              </div>
            </div>
            <div className="favorite-works">
              <h2>Любимые работы:</h2>
              {works.map((item) => {
                return (
                  <ul key={item.id} className="works">
                    <li className="works-content">
                      <img src={item.img} />
                      <p>{item.release}</p>
                    </li>
                  </ul>
                );
              })}
              <div className="add-btn">
                <img onClick={() => setModal(true)} src={add} />
              </div>
            </div>
          </div>
         <ModalMembers open={open} setOpen={setOpen} members={members}/>
         <ModalWorks modal={modal} setModal={setModal} works={works}/>
        
        </div>
      }
      
    />
  );
}

export default Profile;
