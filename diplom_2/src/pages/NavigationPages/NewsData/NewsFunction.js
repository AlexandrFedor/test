import React, {useState} from "react";
import ModalNw from "../../../components/ModalNw";

const NewsFunction = ({img,release,date,description}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (

            <div className="content-news">
              <li className="img-news">
                <img src={img}/>
              </li>

              <div className="text-news">
                <h1>{release}</h1>
                <p>{date}</p>
              </div>
              <ModalNw active={isOpen} setActive={setIsOpen} img={img} release ={release} description={description}></ModalNw>
              </div>
              

    )


}

export default NewsFunction