import React from "react";
import DefaultPage from "../../components/DefaultPage";
import Header from "../../components/Header";
import NavHex from "./NavHex";
import hexv from "../../img/hex/hex.png";
import "../../css/hexvgon/aboutHex.css";
import AllLinks from "../../components/AllLinks";

function AboutHex() {
  return (
    <>
      <Header />
      <div className="container-hexv">
        <p className="tag-hexv">HEXVGON</p>
        <div className="content-hexv">
          <div className="maskot">
            <img src={hexv}></img>
          </div>

          <div className="about-hexv">
            <NavHex
              style="links-block"
              release="/releaseHex"
              member="/hexv"
            />
            <div className="desc">
              <p>
              hexvgon - молодой и талантливый музыкант из Краснодара, который специализируется на создании электронной музыки. В его творчестве можно услышать яркие и запоминающиеся мелодии, интересные звуковые эффекты и глубокую атмосферу. hexvgon не ограничивается одним жанром, он экспериментирует с различными стилями, такими как wave, house, ambient и другие. Его музыка отличается оригинальностью и инновационностью, она способна перенести слушателя в другой мир и создать неповторимую атмосферу. Hexvgon - это музыкант, который не останавливается на достигнутом и всегда ищет новые способы выражения своего творчества. Например, он участвует в конкурсах, один из них Shinobi Digital при поддержке SAVAGE$TATION представляют Shinobi Digital Contest - онлайн-баттл для саундпродюсеров всех поджанров электроники, призовой фонд которого составляет: 130 000р, а также hexvgon - победитель конкурса на лучший ремикс трека Nikitata - НЕ ПОТЕРЯЙ, ремикс собрал более 500 тыс. прослушиваний со всех площадок. Что касается личной дискографии, трек Dark Beach набрал более 30 тыс. прослушиваний на Spotify. Также hexvgon является участником музыкальной группы "пролитый чай", в которой выступает в качестве саундпродюсера и вокалиста.
              </p>
              <AllLinks/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHex;
