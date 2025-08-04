import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import Catalogo from "./components/Catalogo";
import Ofertas from "./components/Ofertas";
import Contactanos from "./components/Contactanos";
import Footer from "./components/Footer";
import NuestraHistoria from "./components/Historia";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <NuestraHistoria />
      <Services />
      <Catalogo />
      <Ofertas />
      <Contactanos />
      <Footer />
    </div>
  );
};

export default App;
