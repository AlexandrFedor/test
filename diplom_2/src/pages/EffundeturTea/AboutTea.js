import React from "react";
import NavHex from "../hexvgon/NavHex";
import "../../css/effunder/aboutTea.css";
import tea from "../../img/effunder/myak копия.png";
import Header from "../../components/Header";
import AllLinks from "../../components/AllLinks";

function AboutTea() {
  return (
    <>
      <Header style="burgerTea"/>
      <div className="container-teaAb">
        <div className="text-fon"></div>

        <p className="tag-tea">пролитый чай</p>
        <div className="content-tea">
          <div className="maskot-tea">
            <img src={tea}></img>
          </div>

          <div className="about-tea">
            <NavHex
              style={"links-tea"}
              release={"/releaseTea"}
              member={"/tea"}
            />
            <div className="desc-tea">
              <p>
                "Пролитый чай" - это молодая и амбициозная музыкальная группа из
                Краснодара, которая создает музыку в жанрах Hyperpop и поп-панк.
                Их музыка представляет собой синтез энергичных ритмов, ярких
                мелодий и нестандартного звучания, которое невозможно описать
                словами. Группа "Пролитый чай" не боится экспериментировать и
                постоянно ищет новые звуковые решения, чтобы создать
                неповторимый и запоминающийся звук. В их музыке можно услышать
                элементы электронной музыки, рока, панка и поп-музыки. Тексты
                песен "Пролитого чая" часто описывают жизненные ситуации, с
                которыми сталкиваются молодые люди, такие как любовь,
                разочарование, стремление к свободе и самовыражению.
              </p>
              <AllLinks style="tea-links" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTea;
