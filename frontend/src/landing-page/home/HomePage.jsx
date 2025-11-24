import React from "react";
import Awards from "./Awards/Awards.jsx";
import Hero from "./Hero/Hero.jsx";
import Pricing from "./pricing/Pricing.jsx";
import OpenAccount from "../OpenAccount.jsx";
import Footer from "../Footer/footer.jsx";
import Stats from "../home/Stats/Stats.jsx";
import Education from "./Education/education.jsx";
import Navbar from "../Navbar/navbar.jsx";


import "./HomePage.css"; // ⬅️ add this

function HomePage() {
  return (
    <div className="home-page">
      

      <main className="home-main">
        <section id="hero" className="section section-hero">
          <Hero />
        </section>

        <section id="awards" className="section">
          <Awards />
        </section>

        <section id="stats" className="section">
          <Stats />
        </section>

        <section id="pricing" className="section">
          <Pricing />
        </section>

        <section id="education" className="section">
          <Education />
        </section>

        <section id="open-account" className="section section-accent">
          <OpenAccount />
        </section>
      </main>

     
    </div>
  );
}

export default HomePage;
