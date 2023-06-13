import React from "react";
import NavHex from "../hexvgon/NavHex";
import cl from "../../css/korsNaike/aboutKors.module.css";
import Header from "../../components/Header";
import AllLinks from "../../components/AllLinks";
import maskot from "../../img/kors/maskot_Kors_Naike_2.png";

const AboutKors = () => {
  return (
    <>
      <Header style="burgerKors" alt="burger" />
      <div className={cl.container}>
        <p className={cl.tag}>Kors Naike</p>
        <div className={cl.content}>
          <div className={cl.maskot}>
            <img src={maskot}></img>
          </div>

          <div className={cl.about}>
            <NavHex
              style={cl.linksBlock}
              release="/releaseKors"
              member="/kors"
            />
            <div className={cl.desc}>
              <p>
                Когда музыка Kors Naike наполняют воздух, возникает ощущение
                невесомости и спокойствия. Этот музыкальный исполнитель,
                окутанный тайной и загадочностью, является мастером создания
                атмосферной электронной и ambient музыки, которая переносит
                слушателей в потусторонние миры. С каждым ударом и мелодией Kots
                Naike создает звуковой ландшафт, который одновременно
                завораживающе красив и глубоко интроспективен. 
              </p>
              <AllLinks style="kors-links" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutKors;
