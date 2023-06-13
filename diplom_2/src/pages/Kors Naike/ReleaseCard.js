import React from "react";
import ReleaseList from "./ReleaseList";


const ReleaseCard = ({item,cl}) => {


    return(
        <div className={cl.container}>
             <div className={cl.containerContent}>
                {item.map(item => (
                    <ReleaseList cl={cl} key={item.id} post={item}/>
                ))}
             </div>
        </div>
       
    )
}

export default ReleaseCard