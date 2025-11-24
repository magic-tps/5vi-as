import React from "react";
import Slider from "react-slick";
import vino1 from "../assets/102.jpg";
import vino2 from "../assets/103.jpg";
import vino3 from "../assets/104.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const productos = [
  {
    nombre: "Reserva Andina",
    tipo: "Vino Tinto – Malbec",
    imagen: vino1,
    descripcion:
      "Notas de frutos rojos y especias dulces, ideal para la cena navideña.",
  },
  {
    nombre: "Viña del Sol",
    tipo: "Vino Blanco – Sauvignon Blanc",
    imagen: vino2,
    descripcion:
      "Aromas cítricos con final floral, perfecto para entradas frescas y brindis.",
  },
  {
    nombre: "5 Viñas Rosé",
    tipo: "Vino Rosado – Blend Especial",
    imagen: vino3,
    descripcion:
      "Equilibrio entre dulzor y acidez, listo para acompañar postres festivos.",
  },
];

const CatalogoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="catalogo"
      className="relative bg-gradient-to-r from-[#132826] via-[#471010] to-[#132826] py-20"
    >
      <div className="garland absolute top-0 left-0 right-0" aria-hidden="true" />
      <div className="snow-overlay" aria-hidden="true" />
      <div className="twinkle" aria-hidden="true" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="uppercase tracking-[0.25em] text-xs text-[#E3B778]/80 mb-3">
            Edición navidad 2025
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E3B778]">
            Nuestro Catálogo
          </h2>
          <p className="text-gray-200 mt-3 max-w-2xl mx-auto">
            Brinda con sabores inspirados en la temporada: barricas tostadas, frutas
            maduras y presentaciones listas para regalar.
          </p>
        </div>

        <Slider {...settings}>
          {productos.map((vino, index) => (
            <div key={index} className="px-4">
              <div className="frosted-card rounded-2xl overflow-hidden relative">
                <span className="ornament right-5 top-4" aria-hidden="true" />
                <span className="ornament left-4 -bottom-3" aria-hidden="true" />
                <img
                  src={vino.imagen}
                  alt={`Botella de ${vino.nombre}`}
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="p-6 text-white space-y-2">
                  <h3 className="text-xl font-semibold text-[#E3B778] mb-1">
                    {vino.nombre}
                  </h3>
                  <p className="italic text-sm text-gray-300 mb-2">
                    {vino.tipo}
                  </p>
                  <p className="text-sm text-gray-200 mb-4">
                    {vino.descripcion}
                  </p>
                  <a
                    href="#contact"
                    className="inline-block bg-gradient-to-r from-[#e3b778] to-[#c7222a] text-[#3E1F1B] font-semibold px-6 py-2 rounded-full text-sm hover:from-[#f3d6a7] hover:to-[#d83335] transition shadow-md"
                  >
                    Solicitar más info
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CatalogoCarousel;
