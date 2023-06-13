import React, { useState } from "react";
import { useSelector } from "react-redux";

function UserAvatar(props) {
  const isAuth = useSelector((state) => state.user.isAuth);


  return (
    <>
      {isAuth ? (
        <img {...props} src={props.avatar} className={props.classStyle} data-label="LA" ></img>
      ) : (
        <div className={props.classStyle} data-label="LA"></div>
      )}
    </>
  );
}

export default UserAvatar;
