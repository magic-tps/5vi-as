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
      "Notas de frutos rojos, taninos suaves, ideal para carnes rojas.",
  },
  {
    nombre: "Viña del Sol",
    tipo: "Vino Blanco – Sauvignon Blanc",
    imagen: vino2,
    descripcion:
      "Aromas cítricos y frescura ideal para mariscos y quesos suaves.",
  },
  {
    nombre: "5 Viñas Rosé",
    tipo: "Vino Rosado – Blend Especial",
    imagen: vino3,
    descripcion:
      "Equilibrio entre dulzor y acidez, perfecto para celebraciones.",
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
      className="bg-gradient-to-r from-[#bb5a5a] to-[#5c1818] py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E3B778] mb-12">
          Nuestro Catálogo
        </h2>

        <Slider {...settings}>
          {productos.map((vino, index) => (
            <div key={index} className="px-4">
              <div className="bg-[#470808] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={vino.imagen}
                  alt={`Botella de ${vino.nombre}`}
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="p-6 text-white">
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
                    className="inline-block bg-[#E3B778] text-[#3E1F1B] font-semibold px-6 py-2 rounded-full text-sm hover:bg-[#d6a753] transition"
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
