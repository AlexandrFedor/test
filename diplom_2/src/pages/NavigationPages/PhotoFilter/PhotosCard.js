import React from "react";

const PhotosCard = ({item}) => {
    
  return (
    <>
      <ul className="container-photo">
      {item?.map((Val) => {
            return (
            <li className="photo" key={Val.id}>
              <a href={Val.img} data-lightbox="covers">
                <img src={Val.img} />
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PhotosCard;
