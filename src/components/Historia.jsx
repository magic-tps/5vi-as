import React from "react";
import historia1 from "../assets/100.jpg"; // Ej: viñedos
import historia2 from "../assets/101.jpg"; // Ej: retrato familiar o destilación

const NuestraHistoria = () => {
  return (
    <section
      id="historia"
      className="bg-gradient-to-r from-[#5c1818] to-[#bb5a5a] text-white py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div data-aos="fade-right" data-aos-duration="1200">
          <h2 className="text-3xl md:text-4xl font-bold text-[#E3B778] mb-6">
            Nuestra Historia
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-4 text-justify">
            En el corazón del soleado valle de Ica, donde las vides se abrazan
            al sol y el aroma del pisco embriaga el aire, se encuentra la
            familia La Rosa, custodios de una tradición vitivinícola que se
            remonta a un legado de{" "}
            <span className="text-[#E3B778] font-semibold">324 años</span>.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed mb-4 text-justify">
            Cinco viñas, como cinco rosas, representan el amor inmortal por
            nuestra abuela{" "}
            <span className="text-[#E3B778] font-semibold">
              Consuelo La Rosa
            </span>
            , quien nos legó la pasión por la tierra y sus frutos.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed mb-4 text-justify">
            Cada botella es una obra de arte: resultado de secretos ancestrales,
            de trabajo incansable y de la maestría de generaciones unidas por el
            amor al vino y el pisco.
          </p>
          <p className="text-lg text-gray-200 leading-relaxed text-justify">
            <span className="text-[#E3B778] font-semibold">5 Viñas</span> no
            solo elabora productos, sino que cuenta una historia de legado,
            tradición y orgullo familiar. Cada sorbo es un viaje a Ica.
          </p>
        </div>

        {/* Galería de imágenes */}
        <div
          className="grid grid-cols-2 gap-4"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <img
            src={historia1}
            alt="Viñedo soleado"
            className="rounded-xl shadow-lg h-64 object-cover w-full"
          />
          <img
            src={historia2}
            alt="Familia La Rosa"
            className="rounded-xl shadow-lg h-64 object-cover w-full translate-y-6"
          />
        </div>
      </div>
    </section>
  );
};

export default NuestraHistoria;
