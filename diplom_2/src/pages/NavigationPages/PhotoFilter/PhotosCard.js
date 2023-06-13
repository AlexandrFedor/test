import React from "react";
import PhotoList from "./PhotoList";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PhotosCard = ({ item, remove }) => {
    
    if (!item.length) {
        return <h1>Посты не найдены</h1>;
      }

  return (
    <TransitionGroup className="container-photo">
      {item.map((Val) => (
        <CSSTransition key={Val.id} timeout={500} classNames="post">
          <PhotoList post={Val} remove={remove} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default PhotosCard;
