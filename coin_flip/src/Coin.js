import React from "react";
import "./Coin.css";

const Coin = (props) => {
    return (
      <div className = "coin">
        <img src={props.imgSrc} alt = {props.side} />
      </div>    
    );
}
export default Coin;
