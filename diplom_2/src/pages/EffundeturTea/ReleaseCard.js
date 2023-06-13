import React from "react";
import ReleaseList from "./ReleaseList";

const ReleaseCard = ({ tea }) => {
  return (
    <div className="wrapper-tea">
      {tea.map((item) => (
        <ReleaseList key={item.id} post={item} />
      ))}
    </div>
  );
};

export default ReleaseCard;
