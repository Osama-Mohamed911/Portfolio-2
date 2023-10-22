import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="services" title={"Who I Am?"} />
      </section>
      <section id="About">
        <About />
      </section>
      <section>
        <Parallax type="services" title={"How Can I Help You?"} />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section>
        <Parallax type="portfolio" title={"What I Did?"} />
      </section>
      <div id="Portfolio">
        <Portfolio />
      </div>
      <section id="Contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;
