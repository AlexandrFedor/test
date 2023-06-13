import React from "react";
import DefaultPage from "../../components/DefaultPage";
import back from "../../img/back-svgrepo-com.svg";
import "../../css/InputNav.css";
import spotify from "../../img/spoti.svg"
import vk from "../../img/vk.svg"
import { Link } from "react-router-dom";

function Links() {
  return (
    <DefaultPage
      page={
        <div className="inp_Main">
          <div className="on_Main">
            <img src={back} />
            <p>Назад</p>
          </div>

          <ul className="container-links">
              <li className="content-links">
                <h1>hexvgon</h1>
                <p>hexvgon@gmail.com</p>

               <div className="links-img">
                <Link to="https://vk.com/hexagonmusic" target="_blank"> <img src={vk} /></Link> 
                <img src = {spotify}/>
               </div>
               
              </li>
              <li className="content-links">
                <h1>Angoni</h1>
                <p>hexvgon@gmail.com</p>

               <div className="links-img">
                 <img src={vk} />
             
               </div>
               
              </li>
              <li className="content-links">
                <h1>Kors Naike</h1>
                <p>korsnaike@gmail.com</p>

               <div className="links-img">
                 <img src={vk} />
                <img src = {spotify}/>
               </div>
               
              </li>
              <li className="content-links">
                <h1>пролитый чай</h1>
                <p>effundeteawork@mail.ru</p>

               <div className="links-img">
                 <img src={vk} />
                <img src = {spotify}/>
               </div>
               
              </li>
          </ul>
        </div>
      }
    />
  );
}

export default Links;
