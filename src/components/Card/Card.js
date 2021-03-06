import React from "react";
import "./style.scss";

function Card(props) {
  return (
    <div className="i-card" style={{ width: 400, ...props.style }}>
      {props.children}
    </div>
  );
}

export default Card;
