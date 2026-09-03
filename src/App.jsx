import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";
import Team from "./components/Team.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
