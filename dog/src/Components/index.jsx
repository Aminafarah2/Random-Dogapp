import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Favourites from "./Favourites";

function Components (){
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
    
