import React, { useState } from "react";
import CreatList from "./CreatList";
import ButtonMain from "../../../components/ButtonMain";
import DefaultPage from "../../../components/DefaultPage";



const CreatCard = ({ item, musicants, arts, creativ }) => {
  const [choice, setChoice] = useState({activeTab: 0});
  
  const [toogle, setToogle] = useState(true)

  function handleTab(e) {
    if (toogle === true) {
         setChoice({activeTab: +e.target.getAttribute('data-name')})
    console.log(choice)
    }
   
  }

  function toogleClass() {
    setToogle(!toogle)
    console.log(toogle)
  }

  const {activeTab} = choice


  const CreatMusic = () => {
    return (
      <>
        {musicants.map(Val => 
 
            <CreatList
              key={Val.id}
              post={Val}
            />

        )}
      </>
    );
  };

  const CreatArt = () => {
    return (
      <>
        {arts.map(Val => 

            <CreatList
              key={Val.id}
              post={Val}
            />
   
    )}
      </>
    );
  };

  const CreatAll = () => {
    return (
        <>
        {item.map(Val => 
       
            <CreatList
            key={Val.id}
              post={Val}
            />
        )}
    </>
    );
  };
 

  return (
    <>
      <DefaultPage
        page={
          <div>
            <ul className="honeycomb">

            
                    <CreatList  onClick={handleTab} data-name={1} post={creativ[0]}/>
                    <CreatList onClick={handleTab} data-name={2} post={creativ[1]}/>

            </ul>
            <br></br>
        
            <ul className="honeycomb"> {activeTab === 1  ? <CreatMusic/> : activeTab === 2  ? <CreatArt/> : <CreatAll/> }</ul>
            <div className="buttonChoice">
              <ButtonMain onClick={handleTab} data-name={0} title="Сбросить" />
            </div>
          </div>
        }
      />
    </>
  );
};

export default CreatCard;
