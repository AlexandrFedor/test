import React, { useState } from "react";
import InputNav from "./InputNav";
import PhotosCard from "./PhotoFilter/PhotosCard";
import Modal from "./Profile/Modal";
import ButtonsFilter from "./PhotoFilter/ButtonsFilter";
import PhotoForm from "./PhotoFilter/PhotoForm";

import sim from "../../img/authors/hex.png";
import exd from "../../img/hex/hexvgon_babachaka.jpg";
import anm from "../../img/hex/2JoldXA2XH4_1.png";
import mir from "../../img/authors/mir.jpg";
import ppl from "../../img/authors/tea.jpg";
import mrn from "../../img/effunder/ааа.png";
import zvd from "../../img/effunder/ela.png";
import sng from "../../img/effunder/Без имени-1.png";
import ang from "../../img/Angoni/angoni.jpg";
import lmg from "../../img/kors/Kors Naike Alo.png";
import mgk from "../../img/kors/Magicka.jpg";
import ButtonMain from "../../components/ButtonMain";

function Photo() {
  const [item, setItem] = useState([
    {
      id: 1,
      img: sim,
      artist: "hexvgon",
      musicants: "hexvgon",
      release: "Simulacrum",
      style: "music",
    },
    {
      id: 2,
      img: exd,
      artist: "hexvgon",
      musicants: "hexvgon",
      release: "Exodus",
    },
    {
      id: 3,
      img: anm,
      artist: "hexvgon",
      musicants: "hexvgon",
      release: "Animus Erase",
    },

    {
      id: 4,
      img: mir,
      artist: "Kors Naike",
      musicants: "Kors Naike",
      release: "Mir",
      style: "music",
    },
    {
      id: 5,
      img: lmg,
      artist: "Kors Naike",
      musicants: "Kors Naike",
      release: "Let Me Go",
    },
    {
      id: 6,
      img: mgk,
      artist: "Kors Naike",
      musicants: "Kors Naike",
      release: "Magicka",
    },

    {
      id: 7,
      img: ppl,
      artist: "пролитый чай",
      musicants: "пролитый чай",
      release: "Пепел",
      style: "music",
    },
    {
      id: 8,
      img: mrn,
      artist: "пролитый чай",
      musicants: "пролитый чай",
      release: "Марин Китагава",
    },
    {
      id: 9,
      img: zvd,
      artist: "пролитый чай",
      musicants: "пролитый чай",
      release: "Над нами звёзды",
    },
    {
      id: 10,
      img: sng,
      artist: "пролитый чай",
      musicants: "пролитый чай",
      release: "Слёзы на глазах",
    },

    {
      id: 11,
      img: ang,
      artist: "Angoni",
      style: "art",
    },
  ]);
  const menuItems = [...new Set(item.map((Val) => Val.artist))];
  const filterItem = (curcat) => {
    const newItem = item.filter((newVal) => {
      return newVal.artist === curcat;
    });
    setItem(newItem);
  };

  const createPost = (newPost) => {
    setItem([...item, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setItem(item.filter((p) => p.id !== post.id));
  };

  const [modal, setModal] = useState(false);

  return (
    <InputNav
      content={
        <>
          <ButtonsFilter
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
          <PhotosCard remove={removePost} item={item} />

          <ButtonMain
            style={{ marginBottom: "2vh" }}
            title="Создать пост"
            onClick={() => setModal(true)}
          />
          <Modal visible={modal} setVisible={setModal}>
            <PhotoForm create={createPost} />
          </Modal>
        </>
      }
    />
  );
}

export default Photo;
