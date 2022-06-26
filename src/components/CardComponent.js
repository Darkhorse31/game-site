import React, { useEffect, useState } from "react";
import "./Card.scss";
import Gener from "./Gener";
import Plateform from "./Plateform";
const CardComponent = (props) => {
  const { data } = props;
  const { genres } = data;
  const { platforms } = data;

  return (
    <div className="Card">
      <h4>{data.name}</h4>

      <div className="gener">
        {genres.length < 1
          ? null
          : genres.map((items, idx) => {
              return <Gener key={idx} gdata={items} />;
            })}
      </div>
      <div className="plateForm">
        {platforms.length < 1
          ? null
          : platforms.map((items, idx) => {
              return <Plateform pdata={items} key={idx} />;
            })}
      </div>
      <h6 className="Release">Release:{data.released}</h6>
    </div>
  );
};

export default CardComponent;
