import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Stats from "./stats";
import Mission from "./mission";
import Values from "./values";
import Tech from "./tech";
import Footer from "./footer";
import SEO from "../seo/seo";
import StructuredData from "../seo/structure";
import Trust from "../testimonial/trust";
// 👇 import chatbot
import AIChatWidget from "../AI/chatbot";
import Partner from "../testimonial/partener";
import CoreService from "./coreServise";

export default function Home() {
  return (
    <div>
    <SEO
  title="OPTERWA Rwanda | IT Services, Training & Digital Solutions"
  description="OPTERWA is a Rwanda-based NGO providing IT services, computer repair, networking, software development, and digital skills training for artisans and students."
  url="https://opterwa.org/"
  keywords="
    OPTERWA Rwanda,
    IT services Kigali,
    computer services Rwanda,
    networking company Kigali,
    software development Rwanda,
    digital skills training Rwanda,
    NGO technology Rwanda
  "
/>
      <StructuredData />

      <Navbar />
      <Hero />
      <Trust />
      <Mission />
      <Values />
      <CoreService />
      <Stats />
      <Partner />

      <Footer />

      {/* 👇 Floating chatbot (important: keep it last) */}
      <AIChatWidget />
    </div>
  );
}