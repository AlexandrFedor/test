import React, { useState } from "react";
import InputNav from "./InputNav";
import PhotosCard from "./PhotoFilter/PhotosCard";
import Data from "./Data";
import ButtonsFilter from "./PhotoFilter/ButtonsFilter";

function Photo() {
  const menuItems = [...new Set(Data.map((Val) => Val.artist))];
  const [item, setItem] = useState(Data);
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.artist === curcat;
    });
    setItem(newItem);
  };
  return (
    <InputNav
      content={
        <>
          <ButtonsFilter
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <PhotosCard item={item} />
        </>
      }
    />
  );
}

export default Photo;
