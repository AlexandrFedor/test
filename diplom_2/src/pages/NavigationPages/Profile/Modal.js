import React from "react";
import cl from './modal.module.css'

const Modal = ({children,visible,setVisible}) =>
{
    const rootClasses = [cl.modalPf]
    if (visible) {
        rootClasses.push(cl.activePf)
    }
    return(
      <div className={rootClasses.join(' ')} onClick={()=>setVisible(false)}>
        <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>{children}</div>
      </div>
    )
}


export default Modal