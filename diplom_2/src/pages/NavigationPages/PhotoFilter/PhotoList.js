import React from "react";
import dlt from "../../../img/UI/delete-1-svgrepo-com.svg";

const PhotoList = (props) => {
  return (
    <div className="content-photo">
         <img className="photoFit" src={props.post.img} />
      <a className="photo-modal" href={props.post.img} data-lightbox="covers">
       
      </a>

      <div className="delete-icon">
        <img onClick={() => props.remove(props.post)} src={dlt} />
        <p>Удалить</p>
      </div>
    </div>
  );
};

export default PhotoList;
