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
                завораживающе красив и глубоко интроспективен. Слои звука
                накладываются друг на друга, сплетая гобелен эмоций и мыслей,
                который является одновременно тонким и мощным. Музыка Kors Naike
                - это путешествие по космосу, путешествие по бескрайним
                просторам Вселенной. Неземные тона и потусторонние текстуры
                вызывают чувство удивления и благоговения, как будто слушатель
                парит среди самих звезд. Будь то нежная пульсация синтезатора
                или отдаленный гул дрона, каждая нота тщательно подобрана, чтобы
                создать впечатление погружения, которое одновременно
                завораживает и гипнотизирует. Музыка Kors Naike - это медитация
                о красоте жизни, напоминание о волшебстве, которое существует в
                окружающем нас мире. Так что закройте глаза, позвольте музыке
                омыть вас и позвольте себе перенестись в мир, превосходящий ваши
                самые смелые мечты. С Kors Naike в качестве вашего гида возможно
                все.
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
