import React from "react";
import ReliseList from "./ReliseList";

const ReliseCard = ({ hexv, cl }) => {
  return (
    <div>
      {hexv.map((item) => (
        <ReliseList cl={cl} key={item.id} post={item} />
      ))}
    </div>
  );
};

export default ReliseCard;
