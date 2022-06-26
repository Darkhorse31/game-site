import React, { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";
import Filter from "../Image/asa.svg";
import "./Main.scss";
const options = {
  method: "GET",
  url: `https://rawg-video-games-database.p.rapidapi.com/games?key=c2fc6678e91b4151873131787e3bf844&page=2&search=god of war&page_size=15&genres=action`,
  headers: {
    "X-RapidAPI-Key": "fe9f8284cemshbf75bb031a09074p1f0fd7jsn56f51015ac9b",
    "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
  },
};

const GameShow = () => {
  const [Allgame, setAllgame] = useState([]);
  useEffect(() => {
    const GameList = async () => {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.results);
          setAllgame(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    GameList();
  }, []);
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
            <div></div>1<div></div>
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
