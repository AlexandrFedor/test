import React from "react";
import DataMusic from "./DataMusic";

const MusicFilter = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="artists">
        {menuItems?.map((Val, id) => {
          return (
            <div onClick={() => filterItem(Val)} key={id}>
              {Val}
            </div>
          );
        })}
        <div onClick={() => setItem(DataMusic)}>Все</div>
      </div>
    </>
  );
};

export default MusicFilter;
