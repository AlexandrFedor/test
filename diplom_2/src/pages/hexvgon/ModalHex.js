import React from "react";
import Modal from "../NavigationPages/Profile/Modal";
import AllLinks from "../../components/AllLinks";
import { Link } from "react-router-dom";
import cl from '../../css/hexvgon/ReliseHex.module.css'

const ModalHex = ({ open, setOpen, source}) => {
  return (
    <Modal visible={open} setVisible={setOpen}>
      <div className={cl.containerMdHex}>
        <div className={cl.releaseBlock}>
          <img className={cl.imgHexv} src={source.img} />
          <AllLinks className={cl.linksHex} />
        </div>
        <div className={cl.textMdHex}>
          <h1>
            {source.release}
            <br />
            <br />
            {source.date}
          </h1>
          <p >Описание релиза: <br/> {source.description}</p>
          <iframe
              className={cl.appleKit}
              id="embedPlayer"
              src={source.apple}
              height="450px"
              frameborder="0"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              allow="autoplay *; encrypted-media *; clipboard-write"
            ></iframe>
          <Link to="/music" className={cl.linkMedia}>
            Перейти к релизам
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default ModalHex;
