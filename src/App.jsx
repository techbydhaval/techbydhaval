import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Element } from "react-scroll";

import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Element name="home"><Home /></Element>
        <Element name="skills"><Skills /></Element>
        <Element name="projects"><Projects /></Element>
        <Element name="experience"><Experience /></Element>
        <Element name="contact"><Contact /></Element>
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}
