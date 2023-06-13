import React from "react";
import "./modalNw.css";
import close from "../../../img/photosSelect/close.png";

function ModalNw({ active, setActive, img, release, date, description }) {
    
  return (
    <div
      className={active ? "modalNw activeNw" : "inactive"}
      onClick={() => {
        setActive(false);
        document.body.style.overflow = "visible"
      }}
    >
      <div
        className={active ? "mdContent activeNw" : "inactive"}
        onClick={(e) => e.stopPropagation()
       }
      >
        <img
          className="close"
          onClick={() => {
            setActive(false);
            document.body.style.overflow = "visible"
          }}
          src={close}
        />
        <div className="modal-albumNw">
          <img src={img}></img>
          <h1>{release}</h1>
          <h2>{date}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ModalNw;
