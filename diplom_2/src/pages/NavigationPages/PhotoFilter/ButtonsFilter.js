import React from "react";
import Data from "../Data";

const ButtonsFilter = ({ filterItem, setItem, menuItems }) => {
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
        <div onClick={() => setItem(Data)}>Все</div>
      </div>
    </>
  );
};

export default ButtonsFilter;
