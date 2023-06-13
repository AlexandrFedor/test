import React, { useState } from "react";
import katana from "../../img/hex/HEXVGON_KATANA 1 (Traced).svg";
import cl from "../../css/hexvgon/ReliseHex.module.css";
import DefaultPage from "../../components/DefaultPage";
import NavHex from "./NavHex";
import { DataNews } from "../NavigationPages/NewsData/DataNews";
import ReliseCard from "./ReliseCard";


const ReliseHex = () => {
  return (
    <DefaultPage
      page={
        <>
          <NavHex style="links-block" release="/releaseHex" member="/hexv" />
          <div className={cl.containerRelise}>
            <img className={cl.katanaHexv} src={katana} />

            <ReliseCard cl={cl} hexv={DataNews} />
          </div>
        </>
      }
    />
  );
};

export default ReliseHex;
