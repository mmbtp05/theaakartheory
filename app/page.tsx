import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
