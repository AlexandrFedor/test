import React from "react";
import DefaultPage from "../../components/DefaultPage";
import "../../css/Profile.css";
import UserAvatar from "../../components/UserAvatar";
import setting from "../../img/Vector.svg";
import vk from "../../img/vk.svg";
import spoti from "../../img/spoti.svg";
import yandex from "../../img/yandex.svg";
import yt from "../../img/yt.svg";
import sim from "../../img/authors/hex.png";

function Profile() {
  return (
    <DefaultPage
      page={
        <div className="profile-container">
          <div className="avatar-container">
            <UserAvatar classStyle="avatar-profile" />
            <h1>
              Александр Фёдоров
              <img src={setting} />
            </h1>
            <p>участник Lost Art</p>
            <div>
              <img src={vk} />
              <img src={spoti} />
              <img src={yandex} />
              <img src={yt} />
            </div>
          </div>
          <div className="favorite-block">
            <div className="favorite-members">
              <h2>Любимые участники:</h2>
              <div className="members">
                <div>
                    <img src={sim}/>
                  <p>hexvgon</p>
                </div>
                <div>
                    <img src={sim}/>
                  <p>Angoni</p>
                </div>
                <div>
                    <img src={sim}/>
                  <p>Kors Naike</p>
                </div>
                <div>
                    <img src={sim}/>
                  <p>hexvgon</p>
                </div>
              </div>
            </div>
            <div className="favorite-works">
              <h2>Любимые работы:</h2>
              <ul className="works">
              <li className="works-content">
                    <img src={sim}/>
                  <p>hexvgon - Simulacriumm</p>
                </li>
              </ul>
                <ul className="works">
              <li className="works-content">
                    <img src={sim}/>
                  <p>hexvgon - Simulacriumm</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default Profile;
