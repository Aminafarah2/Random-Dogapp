import React from "react";

function Favourites() {
  // Retrieve favorites from localStorage
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Hello from Favourites</h1>
      <div className="row">
        {favorites.map((image, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={image} alt={`Favorite Dog ${index + 1}`} className="card-img-top" />
              <div className="card-body">
                {/* Add any additional content or buttons inside the card-body */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favourites;

