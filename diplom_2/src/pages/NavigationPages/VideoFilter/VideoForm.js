import React, {useState} from "react";
import ButtonMain from "../../../components/ButtonMain";
import MyInput from "../../../components/UI/Input/MyInput";

const VideoForm = ({ create }) => {
  const [post, setPost] = useState({ description: "", url: "" });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);

    setPost({ description: "", url: "" });
  };
  return (
    <div className="add-photo">
      <form>
        <MyInput
          value={post.description}
          type="text"
          onChange={(e) => setPost({ ...post, description: e.target.value })}
          placeholder="Описание"
        />
        <MyInput
          value={post.url}
          type="text"
          onChange={(e) => setPost({ ...post, url: e.target.value })}
          placeholder="Ссылка на видео"
        />
        <ButtonMain title="Добавить пост" onClick={addNewPost}></ButtonMain>
      </form>
    </div>
  );
};

export default VideoForm;
