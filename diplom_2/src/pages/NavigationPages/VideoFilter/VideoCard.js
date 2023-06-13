import React from "react";
import VideoList from "./VideoList";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const VideoCard = ({ item, remove }) => {

    if (!item.length) {
        return <h1>Посты не найдены</h1>;
      }
  return (
      <TransitionGroup className="container-video">
        {item.map((Val) => 
          <CSSTransition key={Val.id} timeout={500} classNames="post">

        
           <VideoList remove={remove} post={Val}/>
         </CSSTransition>
        )}
      </TransitionGroup>
  );
};

export default VideoCard;
