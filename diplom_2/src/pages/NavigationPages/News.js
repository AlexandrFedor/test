import React, { useEffect, useState } from "react";
import DefaultPage from "../../components/DefaultPage";
import "../../css/InputNav.css";
import back from "../../img/back-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import NewsFunction from "./NewsData/NewsFunction";
import sim from "../../img/authors/hex.png";
import exd from "../../img/hex/hexvgon_babachaka.jpg";
import NewsForm from "./NewsData/NewsForm";
import ButtonMain from "../../components/ButtonMain";
import Modal from "./Profile/Modal";

import PostsService from "../../API/PostsService";
import Loader from "../../components/UI/Loader/Loader";
import { useFetching } from "../../hooks/useFetching";

function News() {
  const navigate = useNavigate();
  const [fetchPosts, isPostLoading, postError] = useFetching( async () => {
    const posts = await PostsService.getAll()
    setItem(posts)
  })

  const [item, setItem] = useState([

    {
        id: 1,
        img: sim, 
        artist: 'hexvgon',
        release: 'hexvgon - Simulacrum',
        date: '12.10.2022',
        description: 'Lorem Poremre Kkroeqw Lorem Poremre Kkroeqw Lorem kroeqw',
    },
    {
        id:2,
        img: exd,
        artist: 'hexvgon', 
        release:'hexvgon - Exodus', 
        date: '12.10.2021',
        description: 'Lorem Poremre Kkroeqw',
    },
    

]);

const createPost = (newPost) => {
    setItem([...item, newPost]);
    setModal(false)
  };

//  useEffect(() => {
//    fetchPosts()
//  },[])

  const removePost = (post) => {
    setItem(item.filter((p) => p.id !== post.id));
  };

  const [modal, setModal] = useState(false);


  return (
    <DefaultPage
      page={
        <div className="inp_Main">
          <div className="on_Main">
            <img src={back} onClick={() => navigate(-1)} />
            <p>Назад</p>
          </div>
         
        {postError && 
        <h1>Произошла ошибка ${postError}</h1>}

        {isPostLoading
        ? <Loader />
        :<NewsFunction remove={removePost} item={item} />
        }
           
    
         
          <ButtonMain style={{margin:"4vh 0vw"}} title="Создать пост" onClick={()=>setModal(true)}/>
               <Modal visible={modal} setVisible={setModal}>
                   <NewsForm create={createPost}/>
               </Modal>
      
        </div>
      }
    />
  );
}

export default News;
