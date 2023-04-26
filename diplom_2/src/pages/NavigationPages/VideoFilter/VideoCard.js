import React from "react";

const VideoCard = ({ item }) => {
  return (
    <>
      <ul className="container-video">
        {item?.map((Val) => {
          return (
            <div key={Val.id}>
              <li className="content-video">
                <iframe
                  width="1136"
                  height="639"
                  src={Val.url}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </li>
              <div className="text-video">
                <p className="text-video">{Val.description}</p>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default VideoCard;
