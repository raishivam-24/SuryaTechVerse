import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import TrustedBy from "./components/TrustedBy.jsx";
import About from "./components/About.jsx";
import Approach from "./components/Approach.jsx";
import Services from "./components/Services.jsx";
import Industries from "./components/Industries.jsx";
import Work from "./components/Work.jsx";
import Team from "./components/Team.jsx";
import Reviews from "./components/Reviews.jsx";
import FAQ from "./components/FAQ.jsx";
import Careers from "./components/Careers.jsx";
import CTA from "./components/CTA.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen w-full antialiased bg-cream text-ink font-body">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Approach />
        <Services />
        <Industries />
        <Work />
        <Team />
        <Reviews />
        <FAQ />
        <Careers />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
