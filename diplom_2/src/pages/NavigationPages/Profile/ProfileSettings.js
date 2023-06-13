import React from "react";
import cl from './modalSettings.module.css'
import Modal from "./Modal";
import { uploadAvatar, deleteAvatar } from "../../../actions/user";
import { useDispatch } from "react-redux";


const ProfileSettings = (props) => {
const dispatch = useDispatch()
    function handleNameChange(e) {
        props.setUserSetting({
            ...props.userSetting,
            username: e.target.value,
        });
    }

    function handleDescChange(e) {
        props.setUserSetting({
            ...props.userSetting,
            description: e.target.value,
        });
    }

    function changeHandler(e) {
        const file = e.target.files[0]
       const image = dispatch(uploadAvatar(file))
       props.setUserSetting({
        ...props.userSetting,
        avatar:image
       })
    }

    return (
    

    
        <Modal visible={props.modal} setVisible={props.setModal}>    
        <div className={cl.addPhoto}>
        <label>
                Имя:
                <input
                    value={props.userSetting.username}
                    onChange={handleNameChange}
                />
            </label>
            <label>
                Описание:
                <input
                    value={props.userSetting.description}
                    onChange={handleDescChange}
                />
            </label>
            <label>
                Аватар:
                <input
                accept="image/*"
                type="file"
                    onChange={e => changeHandler(e)}
                />
            </label> 
            <button onClick={() => dispatch(deleteAvatar())}>Удалить аватар</button>
            </div>
       </Modal>   
    )
}

export default ProfileSettings