import React from "react";
import '../css/hexagonGrids.css'
import music from '../img/music-note-svgrepo-com.svg'
import art from '../img/art-design-paint-pallet-format-text-svgrepo-com.svg'

function HexagonGrids() {
    return (
        
<ul className="honeycomb">
   
    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={music}/>
        <div className="honeycomb-cell_title">Музыка</div>
    </li>
    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={art}/>
        <div className="honeycomb-cell_title">Арт</div>
    </li>
  
  
    {/*<li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src=""/>
        <div className="honeycomb-cell_title">Чёто</div>
    </li>*/}
    
    <li className="honeycomb-cell honeycomb_Hidden">
    </li>
</ul>

    )
}

export default HexagonGrids