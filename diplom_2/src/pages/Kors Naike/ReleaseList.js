import React, { useState } from "react";
import ModalTea from "../EffundeturTea/ModalTea";


const ReleaseList = (props) => {

    const [open,setOpen] = useState(false)


    return (
        <>
     
<div className={props.cl.release} onClick={() => setOpen(true)}>
                  <img key={props.post.id} src={props.post.img} />
                  <img key={props.post.id} className={props.cl.back} src={props.post.img} />
                  <p className={props.cl.text}>{props.post.release}</p>
                  
                </div>
              <ModalTea open={open} setOpen={setOpen} source={props.post}/>  
 </>
    )  
    
}

export default ReleaseList