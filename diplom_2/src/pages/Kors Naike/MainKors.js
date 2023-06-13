import React from "react";
import cl from '../../css/korsNaike/mainKors.module.css'
import NavHex from '../hexvgon/NavHex'



const MainKors = () =>{

    return (
 

<div className={`${cl.container} `}>
      <div className={cl.logoContainer}>
        <p>Kors Naike</p>
      </div>
      <div className={cl.categoriesBlock}>
        <p>Музыкальный продюсер в жанре электронной ambient музыки</p>
        <NavHex style ={cl.linksBlock} release ='/releaseKors' member = '/kors'/>
      </div>
    </div>

    )
}


export default MainKors