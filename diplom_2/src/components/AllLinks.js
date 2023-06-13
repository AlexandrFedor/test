import React from "react";
import "../css/allLinks.css";
import vk from "../img/vk.svg";
import spotify from "../img/spoti.svg";
import yandex from "../img/yandex.svg";
import yt from "../img/yt.svg";

function AllLinks({style,vkon,spoty,yand,yout}) {
  return (
    <div className="all-links">
      <div className={style}>
        <a href={vkon} target="_blank">
          <img src={vk} />
        </a>
        <a href={spoty} target="_blank">
          <img src={spotify} />
        </a>
        <a href={yand} target="_blank">
          <img src={yandex} />
        </a>
        <a href={yout} target="_blank">
          <img src={yt} />
        </a>
      </div>
    </div>
  );
}

export default AllLinks;
