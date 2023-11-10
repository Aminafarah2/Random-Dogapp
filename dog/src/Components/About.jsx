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
        <p>This is an app for random Images:it displays random images of dogs and you can also add them to your favourites
            Dogs are a diverse and fascinating group of animals,
             both in terms of their physical appearances 
             and their unique personalities.
              When it comes to their images, 
              you'll find an astonishing array of shapes, sizes, and coat colors.
              each with its own distinct charm. Their coats can be smooth and sleek like the Greyhound,
               or fluffy and cuddly like the Pomeranian. In terms of temperament, 
               dogs exhibit a wide range of characters as well. Some are known for their unwavering loyalty
                and protective nature,
                like the German Shepherd, while others are beloved for their boundless energy and playfulness, such as the Labrador Retriever
                CLICK "LOG IN"to see images of dogs </p>
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