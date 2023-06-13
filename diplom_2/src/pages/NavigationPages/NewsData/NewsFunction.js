import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NewsList from "./NewsList";

const NewsFunction = ({ item, remove }) => {
  if (!item.length) {
    return <h1>Посты не найдены</h1>;
  }
  return (
    <TransitionGroup className="container-news">
      {item.map((Val) => (
        <CSSTransition key={Val.id} timeout={500} classNames="post">
          <NewsList post={Val} remove={remove} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default NewsFunction;
