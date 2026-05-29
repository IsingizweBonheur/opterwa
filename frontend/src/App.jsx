import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Home from "./component/home";
import Service from "./service/service";
import SEO from "./seo/seo";
import About from "./about/about";
import Gallery from "./gallery/gallery";
import Contact from "./contact/contact";
export default function App(){
  return(
    <div>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Service />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  )
}