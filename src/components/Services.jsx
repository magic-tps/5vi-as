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
      className="bg-gradient-to-r from-[#0b1a1a] via-[#1f0c0c] to-[#0b1a1a] py-16 px-4 md:px-8"
    >
      <div className="container mx-auto">
        <div className="text-center mb-10" data-aos="fade-up">
          <p className="uppercase tracking-[0.3em] text-xs text-[#E3B778]/80 mb-2">
            Espíritu navideño
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E3B778]">
            Nuestros Servicios
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg card-glow p-8 text-center hover:-translate-y-2 transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
