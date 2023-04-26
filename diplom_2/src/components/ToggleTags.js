import React, {useState} from "react";
import { Link } from "react-router-dom";


function ToggleTags(props){
    const [isActive, setActive] = useState(false)
    const handleToggle = () => {
       setActive(!isActive);
    }
    let toggles = isActive ? " choiceCheck" : null

    return(
        <div className={toggles}>
              <Link to={props.link}  onClick={handleToggle}>
                {props.text}
              </Link>
        </div>
    )

}

export default ToggleTags