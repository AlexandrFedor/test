import React from "react";
import Footer from "../../components/Footer";
import Logo from "../../components/Logo";
import "../../css/IntroPage.css";
import ButtonMain from "../../components/ButtonMain";

function IntroPage() {
  return (
    <div>
      <div className="parent">
        <div className="block">
          <Logo/>
          <h2>Добро пожаловать в творческое объединение </h2>
          <h1>Lost Art</h1>
          <h3>
            Выберите интересующие вас виды творчества и их подгруппы.<br/> На основе
            вашего выбора будут подобраны подходящие участники нашего
            объединения.
          </h3>
          <div className="containerIntro">
            <ButtonMain title = "Продолжить" link = "/login"/>
          </div>
         
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default IntroPage;

