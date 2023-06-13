import React, { useState } from "react";
import Modal from "../../../components/Modal";
import dlt from "../../../img/UI/delete-1-svgrepo-com.svg";

const MusicFunction = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <div className="content-music" > 
          <img
            onClick={() => {setIsOpen(true)
                document.body.style.overflow = "hidden"}}
            src={props.post.img}
            className="img-music"
          />
          
          <div className="text-over">
            {props.post.artist}
          </div>
           <div className="delete-icon">
        <img onClick={() => props.remove(props.post)
       } src={dlt} />
        <p>Удалить</p>
      </div>
        </div>
          <p className="text-music">{props.post.release}</p>
       
      <Modal
        active={isOpen}
        setActive={setIsOpen}
        img={props.post.img}
        release={props.post.release}
        apple={props.post.apple}
      />
    </div>
  );
};

export default MusicFunction;
