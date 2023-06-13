import React, { useState } from "react";
import "../css/hexagonGrids.css";

function HexagonGrids(props) {
  const [isActive, setActive] = useState(false);

  function toggleClass() {
    setActive(!isActive);
  }

  return (
    <>
      <li
        className={props.isActive ? "honeycomb-cell choice" : "honeycomb-cell"}
        onClick={()=> {toggleClass();}}
           
      >
        <img
       
          className={
            props.isActive ? "honeycomb-cell_img choice-img" : "honeycomb-cell_img"
          }
          src={props.img}
        />
        <div
          className={
            props.isActive
              ? "honeycomb-cell_title choice-title"
              : "honeycomb-cell_title"
          }
        >
          {props.title}
        </div>
      </li>
    </>
  );
}

export default HexagonGrids;
