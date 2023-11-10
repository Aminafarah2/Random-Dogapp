import React from "react";
import { useNavigate } from "react-router-dom";
function About ({ dogImages }){
    const DisplayDogs =[
        { id: 1,  imageUrl:"https://i.pinimg.com/236x/73/66/13/736613fdd36b0f711208483155f3abd7.jpg" },
        {id: 2, imageUrl:"https://i.pinimg.com/236x/e9/2a/2a/e92a2a9e9af0ab81b1b7988507fb9a8f.jpg"},
        {id: 3,  imageUrl:"https://i.pinimg.com/236x/d0/cf/d7/d0cfd7f2ed6f40d16ec0f59bd90c78b2.jpg"},
        
    ]
     const navigate = useNavigate();
    const handleExploreClick = () => {
        navigate("/home");
      };

    return (
        <div>
            <h1>RANDOM DOGS </h1>
            <button
          className="btn btn-dark btn-lg position-relative py-2 px-4 text-bg-secondary border border-secondary rounded-pill"
          onClick={() => handleExploreClick()}
        >
          LOG IN
        </button>
        <div className="container mt-4">
        <h2 className="text-center">Explore Cute Dogs</h2>
        <p>this is an app for random Images </p>
        <div className="row">
            { DisplayDogs .map((dog) => (
            <div key={dog.id} className="col-md-4 mb-4">
              <div className="card">
                
                <img
                  src={dog.imageUrl}
                  className="card-img-top"
                  alt={dog.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{dog.name}</h5>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
        </div>
    )
}
export default About;