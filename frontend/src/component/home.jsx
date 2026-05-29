import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Stats from "./stats";
import Mission from "./mission";
import Values from "./values";
import Tech from "./tech";
import Footer from "./footer";
import SEO from "../seo/seo";
export default function Home(){
    return(
        <div>
            <SEO 
        title="Home"
        description="Welcome to OPTERWA - Bridging traditional craftsmanship with modern technology solutions for potters and artisans worldwide."
        url="https://opterwa.com/"
      />
            <Navbar />
            <Hero />
            <Mission />
            <Values />
            <Stats />
            <Footer />
        </div>
    )
}