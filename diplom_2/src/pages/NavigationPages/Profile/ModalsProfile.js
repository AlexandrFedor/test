import React from "react";
import Modal from "./Modal";
import cl from './modalPf.module.css'


  export const ModalMembers = ({open,setOpen,members}) => {
    return (
      <Modal visible={open} setVisible={setOpen}>
        <h1 style={{textAlign:"center"}}>Выберите любимого автора:</h1>
        <div className={cl.members} style={{ fontSize: "24px" }}>
          {members.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.img} />
                <p>{item.artist}</p>
              </div>
            );
          })}
        </div>
      </Modal>
    );
  };

 export const ModalWorks = ({modal,setModal,works}) => {
    return (
      <Modal visible={modal} setVisible={setModal}>
        <h1 style={{textAlign:"center"}}>Выберите любимые работы:</h1>
          <ul className={cl.works}>
        {works.map((item) => {
          return (
          
              <li  key={item.id} className={cl.worksContent}>
                <img src={item.img} />
                <p>{item.release}</p>
              </li>
            
          );
        })}
        </ul>
      </Modal>
    );
  };

