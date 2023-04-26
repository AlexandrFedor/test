import React, { useState } from "react";
import InputNav from "./InputNav";
import MusicCard2 from "./MusicFilter/MusicCard2";
import MusicFilter from "./MusicFilter/MusicFilter";
import DataMusic from "./MusicFilter/DataMusic";


function Music() {
  const menuItems = [...new Set(DataMusic.map((Val) => Val.artist))];
  const [item, setItem] = useState(DataMusic);
  const filterItem = (curcat) => {
    const newItem = DataMusic.filter((newVal) => {
      return newVal.artist === curcat;
    });
    setItem(newItem);
  };
  return (
    <InputNav
      content={
        <>
          <MusicFilter
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />

            <MusicCard2  item={item} />
          
        </>
      }
    />
  );
}

export default Music;
