import React, { useState } from "react";
import ButtonMain from '../../../components/ButtonMain'
import MyInput from "../../../components/UI/Input/MyInput";

const PhotoForm = ({ create}) => {


  const [post, setPost] = useState({ artist: "", release: "", img: "" });


  const uploadFile = async (e) => {
    const file = e.target.files[0];
     const base64 = await convBase64(file)
     setPost({...post, img:base64})
  }

  const convBase64 = (file) => {
    return new Promise((resolve,reject) =>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file)

        fileReader.onload = ()=>{
            resolve(fileReader.result);
        }
         
        fileReader.onerror = (error) => {
            reject(error);
        }
    }
    )
  }


  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    };
    create(newPost)
   
    setPost({ artist: "", release: "", img: "" }); 

  };

  return (
    <div className="add-photo">
      <form  >
      <MyInput
        value={post.artist}
        type="text"
        onChange={e => setPost({ ...post, artist: e.target.value })}
        placeholder="Автор"
      />

      <MyInput
        value={post.release}
        type="text"
        onChange={e => setPost({ ...post, release: e.target.value })}
        placeholder="Релиз"
      />
    <label for="upd-photo" className="upd">
           <p>Добавить изображение:</p>
    </label>
      <MyInput
      id="upd-photo"
   
        type="file"
        onChange={e => uploadFile(e)}
      />   
          <ButtonMain title="Добавить пост" onClick={addNewPost}></ButtonMain>
      </form>

    </div>
  );
};

export default PhotoForm;
