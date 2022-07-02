import React, { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";
import Filter from "../Image/asa.svg";
import "./Main.scss";

const GameShow = () => {
  const [Allgame, setAllgame] = useState([]);
  const [page,setPage]=useState(1)
  const [count,setCount]=useState(1)
  const options = {
    method: "GET",
    url: `https://rawg-video-games-database.p.rapidapi.com/games?key=c2fc6678e91b4151873131787e3bf844&page=${page}&search=god of war&page_size=15&genres=action`,
    headers: {
      "X-RapidAPI-Key": "fe9f8284cemshbf75bb031a09074p1f0fd7jsn56f51015ac9b",
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
    },
  };
  
 
  const PageIn=()=>{
    setPage(page=>page+1)
  }
  const PageDe=()=>{
    setPage(page=>{return page===1?1:page-1})
  }

  
  useEffect(() => {
    const GameList = async () => {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.count);
          setCount(!response.data.count?null:response.data.count%15>0?Math.floor(response.data.count/15) + 1:response.data.count%15===0?response.data.count/15:1)
          setAllgame(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    GameList();
  }, [page]);
  return (
    <div className="main" style={{ width: "100%" }}>
      <div className="game">
        {Allgame.length < 1
          ? null
          : Allgame.map((items, idx) => {
              return <CardComponent data={items} key={idx} />;
            })}
        <div>
          <center>
           <button className="btn"
           onClick={PageDe}
           >&lt;</button><span>{page} of {count}</span><button className="btn"
           onClick={PageIn}
           >&gt;</button>
          </center>
        </div>
      </div>
      <div className="New">
        <input type={"text"} placeholder="Search..."></input>
        <img src={Filter}></img>
      </div>
    </div>
  );
};

export default GameShow;
