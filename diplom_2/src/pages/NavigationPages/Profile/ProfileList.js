import React,{useState} from "react";
import add from "../../../img/UI/add-plus-circle-svgrepo-com.svg";
import { ModalWorks,ModalMembers } from "./ModalsProfile";

const ProfileList = (props) => {
    const [open, setOpen] = useState(false);
    const [modal, setModal] = useState(false);

    return(
        <>
    
        <div className="favorite-block">
        <div className="favorite-members">
          <h2>Любимые участники:</h2>
          <div className="members">
            {props.members.map((item) => {
              return (
                <div key={item.id}>
                  <img src={item.img} />
                  <p>{item.artist}</p>
                </div>
              );
            })}
          </div>
          {props.isAuth &&  <div className="add-btn">
            <img onClick={() => setOpen(true)} src={add} />
          </div>}
         
        </div>
        <div className="favorite-works">
          <h2>Любимые работы:</h2>
          {props.works.map((item) => {
            return (
              <ul key={item.id} className="works">
                <li className="works-content">
                  <img src={item.img} />
                  <p>{item.release}</p>
                </li>
              </ul>
            );
          })}
          <div className="add-btn">
            <img onClick={() => setModal(true)} src={add} />
          </div>
        </div>
      </div>
     <ModalMembers open={open} setOpen={setOpen} members={props.members}/>
     <ModalWorks modal={modal} setModal={setModal} works={props.works}/>
    </>
    )
}


export default ProfileList