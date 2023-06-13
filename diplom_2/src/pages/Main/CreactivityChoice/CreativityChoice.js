import React, { useState } from "react";
import "../../../css/creativityChoice.css";
import music from "../../../img/music-note-svgrepo-com.svg";
import art from "../../../img/art-design-paint-pallet-format-text-svgrepo-com.svg";
import ang from "../../../img/Angoni/angoni.jpg";
import sim from "../../../img/authors/hex.png";
import mir from "../../../img/authors/mir.jpg";
import ppl from "../../../img/authors/tea.jpg";

import CreatCard from "./CreatCard";

function CreativityChoice() {

     const creativ = [
    {
      id: 1,
      img: music,
      artist: "Музыка",
    },
    {
      id: 2,
      img: art,
      artist: "Арт",
    },
  ];
  const musicants = [
    {
      id: "1",
      img: sim,
      artist: "hexvgon",
      link: "/mainhex"
    },

    {
      id: "2",
      img: mir,
      artist: "Kors Naike",
      link: "/mainkors"
    },

    {
      id: "3",
      img: ppl,
      artist: "пролитый чай",
      link: "/maintea"
    },
  ];

  const arts = [
    {
      id: "1",
      img: ang,
      artist: "Angoni",
      link: '/mainangoni'
    },
  ];

  const item = [
    {
      id: "1",
      img: sim,
      artist: "hexvgon",
      link: "/mainhex"
    },
    {
      id: "2",
      img: mir,
      artist: "Kors Naike",
      link: "/mainKors"
    },

    {
      id: "3",
      img: ppl,
      artist: "пролитый чай",
      link: "/maintea"
    },
    {
        id: "4",
        img: ang,
        artist: "Angoni",
        //link: '/mainangoni'
      },
  ];
 

  return (
    <CreatCard item={item} arts={arts} musicants={musicants} creativ={creativ} />
   
  );
}

export default CreativityChoice;
