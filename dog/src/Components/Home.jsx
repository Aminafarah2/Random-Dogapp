
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

 function Home() {
    const [dogImages, setDogImages] = useState([]);
    const [page, setPage] = useState(1);
    const [favorites, setFavorites] = useState([]);
  
    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random/10?page=${page}")
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            setDogImages(data.message);
          } else {
            alert("Failed to fetch dog images.");
          }
        })
        .catch((error) => {
          console.error("Error fetching dog images:", error);
        });
    }, [page]);
  
    const handleLoadMore = () => {
      setPage(page + 1);
    };
  
    const addToFavorites = (image) => {
      // Update the favorites state and store it in localStorage
      const updatedFavorites = [...favorites, image];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };
  
    return (
      <div className="container mt-5">
        <h1 className="mb-4">Hello from home</h1>
        <div className="row">
          {dogImages.map((image, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img src={image} alt={`Dog ${index + 1}`} className="card-img-top" />
                <div className="card-body">
                  <Link to="/favourites">
                  <button
                    className="btn btn-primary"
                    onClick={() => addToFavorites(image)}
                  >
                    Add to Favorites
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="btn btn-secondary" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      </div>
    );
  }
  

export default Home;