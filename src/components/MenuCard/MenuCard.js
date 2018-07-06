import React from "react";
import "./MenuCard.css"

const MenuCard = () => (
    <div className="card">
      <div className="img-container">
        {/* <img alt={props.itemName} src={props.itemImage} /> */}
      </div>
      <div className="content">
      <p>A description of the class.</p>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">𝘅</span> */}
    </div>
  );
  
  export default MenuCard;