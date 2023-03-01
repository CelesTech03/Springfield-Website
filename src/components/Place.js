import React from "react";

function Place({ name, image, description }) {
  return (
    <div className="place">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{description}</p>
    </div>
  );
}

export default Place;
