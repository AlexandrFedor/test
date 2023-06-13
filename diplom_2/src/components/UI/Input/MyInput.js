import React from "react";
import inputClass from './myInput.module.css'


const MyInput = (props) => {
    return (
        <input className={inputClass.myInput} {...props}></input>
    )
}

export default MyInput