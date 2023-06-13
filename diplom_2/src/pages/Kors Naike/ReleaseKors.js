import React from "react";
import DefaultPage from "../../components/DefaultPage";
import NavHex from "../hexvgon/NavHex";
import cl from "../../css/korsNaike/releaseKors.module.css";
import ReleaseCard from "./ReleaseCard";
import { DataKors } from "./DataKors";

const ReleaseKors = () => {

  return (
    <DefaultPage
      page={
        <>
          <NavHex style={cl.linksBlock} release="/releaseKors" member="/kors" />
         <ReleaseCard cl={cl} item={DataKors}/>
        </>
      }
    />
  );
};

export default ReleaseKors;
