import React from "react";
import DataVideo from "./DataVideo";

const VideoFilter = ({ filterItem, setItem, menuItems }) => {
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
          <div onClick={() => setItem(DataVideo)}>Все</div>
        </div>
      </>
    );
  };

export default VideoFilter;
