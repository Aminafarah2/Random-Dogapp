import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Favourites from "./Favourites";

function Components (){
    const [dogImages, setDogImages] = useState([]);
  const [page] = useState(1);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random/10?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setDogImages([...dogImages, ...data.message]);
        } else {
          alert("Failed to fetch dog images.");
        }
      })
      .catch((error) => {
        console.error("Error fetching dog images:", error);
      });
  }, [page]);
    return (
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<About  />} />
            <Route path="favourites" element={<Favourites  />} />
            <Route path="home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      );
    }
    
    export default Components;
    
