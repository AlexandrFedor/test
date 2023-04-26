import React, { useState } from "react";
import InputNav from "./InputNav";
import DataVideo from "./VideoFilter/DataVideo";
import VideoCard from "./VideoFilter/VideoCard";
import VideoFilter from "./VideoFilter/VIdeoFilter";

function Video() {
    const menuItems = [...new Set(DataVideo.map((Val) => Val.artists))];
    const [item, setItem] = useState(DataVideo);
    const filterItem = (curcat) => {
      const newItem = DataVideo.filter((newVal) => {
        return newVal.artists === curcat;
      });
      setItem(newItem);
    };
    return (
      <InputNav
        content={
          <>
            <VideoFilter
              filterItem={filterItem}
              setItem={setItem}
              menuItems={menuItems}
            />
            <VideoCard item={item} />
          </>
        }
      />
    );
  }
export default Video;
