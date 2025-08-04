import React from "react";
import hero from "../assets/10.jpg";
import hero2 from "../assets/11.jpg";
import hero3 from "../assets/12.png";

const Hero = () => {
  const stats = [
    { value: "2,500+", label: "Clientes satisfechos" },
    { value: "5+", label: "Viñedos asociados" },
    { value: "10+", label: "Variedades de vinos y piscos" },
    { value: "300+", label: "Años de tradición" },
  ];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-r from-[#bb5454] to-[#470808]"
    >
      <article className="container mx-auto px-4 py-5 md:py-5 flex flex-col md:flex-row items-center">
        {/* Texto */}
        <div
          className="md:w-1/2 mb-10 md:mb-0"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <hgroup>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              El sabor de la tradición en{" "}
              <mark className="text-[#E3B778] bg-transparent">cada copa</mark>
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-lg text-justify">
              Disfruta nuestros vinos y piscos artesanales cuidadosamente
              elaborados en las mejores tierras del país. Bienvenido a 5 Viñas.
            </p>
          </hgroup>

          {/* Botones */}
          <nav
            className="flex flex-col sm:flex-row gap-4 mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <a
              href="#catalogo"
              className="bg-[#E3B778] hover:bg-[#d6a753] text-[#3E1F1B] font-semibold px-8 py-3 rounded-full text-center transition shadow-lg"
              aria-label="Ver catálogo"
            >
              Ver Catálogo
            </a>
            <a
              href="#historia"
              className="border border-[#E3B778] text-[#E3B778] hover:bg-[#6F2D2D] px-8 py-3 rounded-full text-center transition"
              aria-label="Conocer nuestra historia"
            >
              Nuestra Historia
            </a>
          </nav>

          {/* Estadísticas */}
          <aside data-aos="fade-up" data-aos-delay="400">
            <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-center">
              {stats.map((stat, index) => (
                <li key={index} className="px-2">
                  <strong className="text-2xl font-bold text-[#E3B778]">
                    {stat.value}
                  </strong>
                  <small className="block text-sm text-gray-200">
                    {stat.label}
                  </small>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Imágenes responsivas */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {/* Botella 1 */}
          <figure
            className="relative aspect-square w-32 sm:w-36 md:w-40 lg:w-44"
            data-aos="zoom-in-up"
            data-aos-delay="0"
          >
            <span className="bg-[#E3B778] rounded-full absolute inset-0 opacity-20 -z-10" />
            <img
              src={hero}
              alt="Botella de vino 5 Viñas"
              className="w-full h-full object-cover rounded-full shadow-2xl"
              loading="eager"
            />
          </figure>

          {/* Botella 2 */}
          <figure
            className="relative aspect-square w-32 sm:w-36 md:w-40 lg:w-44"
            data-aos="zoom-in-up"
            data-aos-delay="150"
          >
            <span className="bg-[#E3B778] rounded-full absolute inset-0 opacity-20 -z-10" />
            <img
              src={hero2}
              alt="Botella de vino 5 Viñas"
              className="w-full h-full object-cover rounded-full shadow-2xl"
              loading="eager"
            />
          </figure>

          {/* Botella 3 */}
          <figure
            className="relative aspect-square w-32 sm:w-36 md:w-40 lg:w-44"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            <span className="bg-[#E3B778] rounded-full absolute inset-0 opacity-20 -z-10" />
            <img
              src={hero3}
              alt="Botella de vino 5 Viñas"
              className="w-full h-full object-cover rounded-full shadow-2xl"
              loading="eager"
            />
          </figure>
        </div>
      </article>
    </section>
  );
};

export default Hero;
