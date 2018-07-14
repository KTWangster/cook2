import React from "react";
import "./MenuCard.css"

const MenuCard = (props) => (
  <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.imageSrc} />
      </div>
      <div className="content">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">𝘅</span> */}
    </div>
  );
  
  export default MenuCard;
