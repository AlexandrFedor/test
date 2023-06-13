import React, { useState } from "react";
import MyInput from "../../../components/UI/Input/MyInput";
import ButtonMain from "../../../components/ButtonMain";

function MusicForm({create}) {
  const [post, setPost] = useState({
    artist: "",
    release: "",
    apple: "",
    img: "",
  });

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
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost)
    setPost({ artist: "", release: "", apple: "", img: "" });
  };
  return (
    <div className="add-photo">
      <form>
        <MyInput
          value={post.artist}
          onChange={(e) => setPost({ ...post, artist: e.target.value })}
          type="text"
          placeholder="Автор"
        ></MyInput>
        <MyInput
          value={post.release}
          onChange={(e) => setPost({ ...post, release: e.target.value })}
          type="text"
          placeholder="Релиз"
        ></MyInput>
        <MyInput
          value={post.apple}
          type="text"
          onChange={(e) => setPost({ ...post, apple: e.target.value })}
          placeholder="Плейлист в Apple"
        ></MyInput>
        <label for="upd-photo" className="upd">
          <p>Добавить изображение:</p>
        </label>
        <MyInput
          id="upd-photo"
          onChange={e => uploadFile(e)}
          type="file"
        ></MyInput>
        <ButtonMain title="Добавить пост" onClick={addNewPost}>
          Добавить пост
        </ButtonMain>
      </form>
    </div>
  );
}

export default MusicForm;
