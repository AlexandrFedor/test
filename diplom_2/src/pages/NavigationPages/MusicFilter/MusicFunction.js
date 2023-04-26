import React, { useState } from "react";
import Modal from "../../../components/Modal";

const MusicFunction = ({ img, release, apple, musicants }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <div className="content-music">
          <img
            onClick={() => setIsOpen(true)}
            src={img}
            className="img-music"
          />
          <div className="text-over">
            {musicants}
          </div>
          
        </div>
        <div className="text-music">
          <p>{release}</p>
        </div>
      </div>
      <Modal
        active={isOpen}
        setActive={setIsOpen}
        img={img}
        release={release}
        apple={apple}
      />
    </div>
  );
};

export default MusicFunction;
