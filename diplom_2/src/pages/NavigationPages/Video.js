import React, { useState } from "react";
import InputNav from "./InputNav";
import VideoCard from "./VideoFilter/VideoCard";
import VideoFilter from "./VideoFilter/VIdeoFilter";
import VideoForm from "./VideoFilter/VideoForm";
import ButtonMain from "../../components/ButtonMain";
import Modal from "./Profile/Modal";

function Video() {
      const [item, setItem] = useState( [
        {
          id: "1",
          url: "https://www.youtube.com/embed/qFdJ3lH4IEE?list=OLAK5uy_khnfsz6p0UtXR4aIvX9TthMChYJanWu_c",
          description: "hexvgon - Animus Erase",
          artists: "hexvgon",
        },
        {
          id: "2",
          url: "https://www.youtube.com/embed/6gFcby3lssg?list=OLAK5uy_nFFBiYjZY9GbwPsKCVbGc4413HiDSE1rg",
          description: "hexvgon - Dark Beach",
          artists: "hexvgon",
        },
        {
          id: "3",
          url: "https://youtube.com/-7NuV-QM8rA?list=OLAK5uy_k0Oj74ZdQkPzAoC_WICWPaAmfi6ZdSr-8",
          description: "hexvgon - Exodus",
          artists: "hexvgon",
        },
      
        {
          id: "4",
          url: "https://www.youtube.com/watch?v=zy1MNywODyo&list=OLAK5uy_lNCSFSfuN_34oym0bhsB4MDAMRgtkGIlQ",
          description: "Kors Naike - Let Me Go",
          artists: "Kors Naike",
        },
        {
          id: "5",
          url: "https://www.youtube.com/watch?v=sbGaKX2iBII&list=OLAK5uy_k4DmHMZhAvJToVGkDd-1aLf7z338Qn9QU",
          description: "Kors Naike - Mir",
          artists: "Kors Naike",
        }, 
         {
          id: "6",
          url: "https://www.youtube.com/watch?v=fY6W-le7qm4&list=OLAK5uy_n5bvHcboBrxf7Z1ly7fzDIN0-UvIJPcpA",
          description: "пролитый чай - Пепел",
          artists: "пролитый чай",
        },
        {
          id: "7",
          url: "https://www.youtube.com/watch?v=bvsuDeZ_bUM&list=OLAK5uy_kjxLe-LoKbg-ZnWkssEl6BZ6WpYsAcDoU",
          description: "пролитый чай - Марин Китагава",
          artists: "пролитый чай",
        },
        {
          id: "8",
          url: "https://youtu.be/gRQrjdYNBww?list=OLAK5uy_kEj1yLIkUS6fJZ1pZXj41ErbjasPV5wD8",
          description: "пролитый чай - Слезы на глазах",
          artists: "пролитый чай",
        },
      ])
    const menuItems = [...new Set(item.map((Val) => Val.artists))];
  
    const filterItem = (curcat) => {
      const newItem = item.filter((newVal) => {
        return newVal.artists === curcat;
      });
      setItem(newItem);
    };

    const createPost = (newPost) => {
        setItem([...item, newPost]);
        setModal(false)
      };
    
      const removePost = (post) => {
        setItem(item.filter((p) => p.id !== post.id));
      };

      const [modal, setModal] = useState(false);
    return (
      <InputNav
        content={
          <>
            <VideoFilter
              filterItem={filterItem}
              setItem={setItem}
              menuItems={menuItems}
            />
            <VideoCard remove={removePost} item={item} />

         <ButtonMain style={{margin:"4vh 0vw"}} title="Создать пост" onClick={()=>setModal(true)}/>
               <Modal visible={modal} setVisible={setModal}>
                 <VideoForm create={createPost}/>
               </Modal>
           
          </>
        }
      />
    );
  }
export default Video;
