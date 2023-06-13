import React,{useState} from "react";
import ModalNw from "./ModalNw";
import dlt from "../../../img/UI/delete-1-svgrepo-com.svg";

const NewsList = (props) => {
    const [isOpen, setIsOpen] = useState(false);


    return(
        <div className="content-news">
      <li className="img-news">
        <img src={props.post.img} onClick={() => {setIsOpen(true)
        document.body.style.overflow = "hidden"}}/>
          <div className="delete-icon">
        <img onClick={() => props.remove(props.post)
       } src={dlt} />
        <p>Удалить</p>
      </div>
      </li>

      <div className="text-news">
        <h1>{props.post.release}</h1>
        <p>{props.post.date}</p>
      </div>
    
      <ModalNw
        active={isOpen}
        setActive={setIsOpen}
        date={props.post.date}
        img={props.post.img}
        release={props.post.release}
        description={props.post.description}
      />
    </div>
    )
}

export default NewsList