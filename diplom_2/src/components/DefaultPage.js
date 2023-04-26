import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/DefaultPage.css";
import Navigation from "../pages/NavigationPages/Navigation";


function DefaultPage(props) {
  return (
    <div>
      <Header />
      <main>{props.page}</main>
      <Footer />
    </div>
  );
}
export default DefaultPage;
