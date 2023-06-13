import React, { useState } from "react";
import DefaultPage from "../../components/DefaultPage";
import "../../css/effunder/releaseTea.css";
import { DataTea } from "./DataTea";
import ReleaseCard from "./ReleaseCard";

function ReleaseTea() {
  return (
    <DefaultPage
      page={
        <>
          <div className="text-fon"></div>
            <ReleaseCard tea={DataTea}/>
        </>
      }
    />
  );
}

export default ReleaseTea;
