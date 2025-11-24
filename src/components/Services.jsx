import React from "react";
import { FaWineBottle, FaLeaf, FaTruck } from "react-icons/fa";

const services = [
  {
    icon: <FaWineBottle size={36} className="text-[#E3B778]" />,
    title: "Vinos Artesanales",
    description:
      "Ediciones cálidas y especiadas pensadas para armonizar con cenas navideñas y compartir en familia.",
    aosDelay: 0,
  },
  {
    icon: <FaLeaf size={36} className="text-[#E3B778]" />,
    title: "Producción Sostenible",
    description:
      "Cultivamos con prácticas responsables y empaques reciclables decorados con motivos festivos.",
    aosDelay: 150,
  },
  {
    icon: <FaTruck size={36} className="text-[#E3B778]" />,
    title: "Envíos a Todo el Perú",
    description:
      "Llevamos tus regalos con mensajes personalizados y temperatura controlada para conservar la magia.",
    aosDelay: 300,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-r from-[#0b1a1a] via-[#1f0c0c] to-[#0b1a1a] py-16 px-4 md:px-8"
    >
      <div className="twinkle" aria-hidden="true" />
      <div className="absolute -right-10 top-6 w-40 h-40 rounded-full bg-[#e3b778]/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-10 bottom-0 w-48 h-48 rounded-full bg-[#c7222a]/15 blur-3xl" aria-hidden="true" />
      <div className="container mx-auto">
        <div className="text-center mb-10" data-aos="fade-up">
          <p className="uppercase tracking-[0.3em] text-xs text-[#E3B778]/80 mb-2">
            Espíritu navideño
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E3B778]">
            Nuestros Servicios
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 relative z-10">
          {services.map((service, index) => (
            <article
              key={index}
              className="frosted-card rounded-lg p-8 text-center hover:-translate-y-2 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
            >
              <div className="mb-4 flex justify-center">
                <div className="relative">
                  <span className="ornament -top-3 -right-3" aria-hidden="true" />
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center" data-aos="fade-up" data-aos-delay="200">
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#e3b778] to-[#c7222a] text-[#3E1F1B] font-semibold px-6 py-3 rounded-full shadow-lg hover:from-[#f3d6a7] hover:to-[#d83335] transition"
          >
            Agenda una cata navideña
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
