import React from "react";
import { Link } from "react-router-dom"

function PlaceRight({ name, image, description, url }) {
  return (
    <div className="place">
      <div className="lodging-container">
        <div class="lodging-content">
          <h2>{name}</h2>
          <p>{description}</p>
          <Link to={url} target="_blank">
          <button type="text">
            <h2>Book Now</h2>
          </button>
          </Link>
        </div>
        <img className="lodging-images" src={image} alt={name} />
      </div>
    </div>
  );
}

export default PlaceRight;
