import React from "react";
import "./style.css";

const Xcard = props => (
    <div className="card" onClick={() => props.clickCount(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );

export default Xcard;
