import React from "react";
import DefaultPage from "../../components/DefaultPage";
import HexagonGrids2 from "../../components/HexagonGrids2";
import ButtonMain from "../../components/ButtonMain";
import '../../css/creativityChoice.css'

function AuthorsChoice () {

    return (
        <DefaultPage  page = {
            <div>   
            <HexagonGrids2/>
        <div className="buttonChoice">
           <ButtonMain link="" title="Подтвердить"/> 
           
        </div>

 </div>
        }/>


    )
}

export default AuthorsChoice