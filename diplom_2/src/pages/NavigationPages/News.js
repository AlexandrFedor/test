import React,{useState} from "react";
import DefaultPage from "../../components/DefaultPage";
import "../../css/InputNav.css";
import DataNews from   "./NewsData/DataNews"
import back from "../../img/back-svgrepo-com.svg";
import sim from "../../img/authors/hex.png";

function News() {

    const [item, setItem] = useState(DataNews);
  return (
    <DefaultPage
      page={
        <div className="inp_Main">
          <div className="on_Main">
            <img src={back} />
            <p>На главную</p>
          </div>

          <ul className="container-news">
            <div className="content-news">
              <li className="img-news">
                <img src={sim}/>
              </li>

              <div className="text-news">
                <h1>HEXVGON - Simulacrium</h1>
                <p>12 сентября 2022</p>
              </div>
              
            </div>
            <div className="content-news">
              <li className="img-news">
                <img src={sim}/>
              </li>

              <div className="text-news">
                <h1>HEXVGON - Simulacrium</h1>
                <p>12 сентября 2022</p>
              </div>
              
            </div>
          </ul>
        </div>
      }
    />
  );
}

export default News;
