import React from "react";
import '../css/hexagonGrids.css'
import hex from '../img/authors/hex.png'
import tea from '../img/authors/tea.jpg'
import kors from '../img/authors/mir.jpg'
import ang from '../img/authors/Без имени-2.png'

function HexagonGrids2() {
    return (
        
<ul className="honeycomb">
   
    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={hex}/>
        <div className="honeycomb-cell_title">hexvgon</div>
    </li>
    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={tea}/>
        <div className="honeycomb-cell_title">пролитый чай</div>
    </li>
  
  
    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={kors}/>
        <div className="honeycomb-cell_title">Kors Naike</div>
    </li>

    <li className="honeycomb-cell">
        <img className="honeycomb-cell_img" src={ang}/>
        <div className="honeycomb-cell_title">Angoni</div>
    </li>
    
    
    <li className="honeycomb-cell honeycomb_Hidden">
    </li>
</ul>

    )
}

export default HexagonGrids2