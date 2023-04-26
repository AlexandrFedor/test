import React from "react";
import '../../css/creativityChoice.css'
import ButtonMain from "../../components/ButtonMain";
import DefaultPage from "../../components/DefaultPage";
import HexagonGrids from "../../components/HexagonGrids";

function CreativityChoice() {
  return ( <DefaultPage page = {
    <div>
    <HexagonGrids/>
        <div className="buttonChoice">
           <ButtonMain link="/authorch" title="Подтвердить"/>  
        </div>
    </div>
  }/>
    
  );
}

export default CreativityChoice;
