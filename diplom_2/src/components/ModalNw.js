import React from "react";
import "../css/modalNw.css"


function ModalNw({ active, setActive, img,release,date, description}) {
  return (
    <div
      className={active ? "modalNw activeNw" : "inactive"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "nwMdContent activeNw" : "inactive"}
        onClick={(e) => e.stopPropagation()}
      >
          <div className="">
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
