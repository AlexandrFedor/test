import React from "react";
import "../css/modal.css";

function Modal({ active, setActive, img, release, apple }) {
  return (
    <div
      className={active ? "phModal activePh" : "inactivePh"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "phMdContent activePh" : "inactivePh"}
        onClick={(e) => e.stopPropagation()}
      >
          <div className="modal-album">
            <img src={img}></img>
            <p>{release}</p>
          </div>
            <iframe
              className="apple-kit"
              id="embedPlayer"
              src={apple}
              height="450px"
              frameborder="0"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *; clipboard-write"
            ></iframe>
          </div>
    </div>
  );
}

export default Modal;
