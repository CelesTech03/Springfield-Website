import React from "react";

function PlaceRight({ name, image, description }) {
  return (
    <div className="place">
      <div className="lodging-container">
        <div class="lodging-content">
          <h2>{name}</h2>
          <p>{description}</p>
          <button type="text">
            <h2>Book Now</h2>
          </button>
        </div>
        <img className="lodging-images" src={image} alt={name} />
      </div>
    </div>
  );
}

export default PlaceRight;
