import React,{useState} from "react";
import { Link } from "react-router-dom";
import '../../../css/hexagonGrids.css'

const CreatList = (props) => {

    const [isActive, setActive] = useState(false);

    function toggleClass() {
        
      setActive(!isActive);
    }

  return (
    <li
      className={isActive ? "honeycomb-cell choice" : "honeycomb-cell "}
      {...props}
    //  onClick={()=> {toggleClass();}}
    >
      <img
        className={
         isActive ? "honeycomb-cell_img choice-img" : "honeycomb-cell_img"
        }
        src={props.post.img}
      />
      <div
    {...props}
        className={
            isActive
            ? "honeycomb-cell_title  choice-title"
            : "honeycomb-cell_title"
        }
      >
        <Link to={props.post.link}>
        {props.post.artist}
            </Link>
      </div>
    </li>
  );
};

export default CreatList;
