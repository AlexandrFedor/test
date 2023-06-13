import React, { useState } from "react";
import ModalHex from "./ModalHex";


const ReliseList = (props) => {

    const [open, setOpen] = useState(false)

    return(
        <>
            <img className={props.cl.releasesImg }src={props.post.img} onClick={()=>setOpen(true)}/>
            <ModalHex open={open} setOpen={setOpen} source={props.post}/>
        </>
    )
}


export default ReliseList