import React from "react";
import { Link } from "react-router-dom";
import "../../css/navigation.css";
import close from "../../img/close-svgrepo-com (1).svg";

function Navigation({ active, setActive}) {

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)
        
    }
    >
      <div
        className={active ? "nav_body modal-content active" : "modal-content"}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="nav_head">
          <a>Lost Art</a>
          <img src={close} onClick = {() => {setActive(false)
         document.body.style.overflow = "visible"}} />
        </header>

        <div onClick={ () => document.body.style.overflow = "visible"}  className="nav_top">
          <Link  to="/news">Новости</Link>
          <Link to="/profile">Ваш профиль</Link>
        </div>
        <div className="nav_media">
          <p>Медиа</p>
          <div onClick={ () => document.body.style.overflow = "visible"} className="nav_media_links">
             <Link  to="/photo">Фото</Link>
        <Link to="/music">Музыка</Link>
          <Link to="/video">Видео</Link>
         
          </div>
          
        </div>

        <div className="all-links nav_media">
             <Link onClick={ () => document.body.style.overflow = "visible"}  to="/links">Ссылки</Link>
        </div>
       

        <footer className="nav_footer nav_media">
          <Link onClick={ () => document.body.style.overflow = "visible"}  to="/creatch">Изменить предпочтения в направлениях</Link>
        </footer>
      </div>
    </div>
  );
}

export default Navigation;
