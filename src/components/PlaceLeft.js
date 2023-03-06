import React from "react";

function PlaceLeft({ name, image, description }) {
  return (
    <div className="place">

      <div className="lodging-container">
      <img className="lodging-images" src={image} alt={name} />
      <div class="lodging-content">
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="text">
        <h2>Book Now</h2></button>
      </div>
      </div>

    </div>
    
  );
}

export default PlaceLeft;
