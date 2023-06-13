import React,{useState} from "react";
import ModalTea from "./ModalTea";

const ReleaseList = (props) =>{
    const [open, setOpen] = useState(false)

    return(
        <div className="card-container">
        <div className="card-content">
          <p className="cover-text">
         {props.post.cover}
          </p>
          <img onClick={() => setOpen(true)} src={props.post.img}></img>
          <div className="text-tea">
            <p>{props.post.releaseJP}</p>
            <p>{props.post.release}</p>
          </div>
        </div>
        <ModalTea open={open} setOpen={setOpen} source={props.post}/>
      </div>

    )
}

export default ReleaseList