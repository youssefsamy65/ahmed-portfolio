import "./styles/global.css";

import Navbar      from "./components/Navbar/Navbar";
import Hero        from "./components/Hero/Hero";
import About       from "./components/About/About";
import Skills      from "./components/Skills/Skills";
import Experience  from "./components/Experience/Experience";
import Portfolio   from "./components/Portfolio/Portfolio";
import Contact     from "./components/Contact/Contact";
import Footer      from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
