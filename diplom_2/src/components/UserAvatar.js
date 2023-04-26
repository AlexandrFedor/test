import React, { useState } from "react";

function UserAvatar(props) {
  const [avatar, setAvatar] = useState();

  const avatars = document.querySelectorAll(".avatar, .avatar-profile");

  avatars.forEach((a) => {
    const charCodeRed = a.dataset.label.charCodeAt(0);
    const charCodeGreen = a.dataset.label.charCodeAt(1) || charCodeRed;

    const red = Math.pow(charCodeRed, 7) % 200;
    const green = Math.pow(charCodeGreen, 7) % 200;
    const blue = (red + green) % 200;

    a.style.background = `rgb(${red}, ${green}, ${blue})`;
  });

  return (
     <div className={props.classStyle} data-label="LA"></div>
  )
 
}

export default UserAvatar;
