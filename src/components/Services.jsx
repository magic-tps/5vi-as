import React from "react";
import { FaWineBottle, FaLeaf, FaTruck } from "react-icons/fa";

const services = [
  {
    icon: <FaWineBottle size={36} className="text-[#E3B778]" />,
    title: "Vinos Artesanales",
    description:
      "Elaboramos nuestros vinos con métodos tradicionales y uvas seleccionadas de viñedos locales, garantizando calidad y autenticidad en cada botella.",
    aosDelay: 0,
  },
  {
    icon: <FaLeaf size={36} className="text-[#E3B778]" />,
    title: "Producción Sostenible",
    description:
      "Nos comprometemos con el medio ambiente utilizando prácticas agrícolas responsables y envases reciclables en todo nuestro proceso.",
    aosDelay: 150,
  },
  {
    icon: <FaTruck size={36} className="text-[#E3B778]" />,
    title: "Envíos a Todo el Perú",
    description:
      "Lleva el sabor de 5 Viñas a tu hogar. Realizamos entregas rápidas, seguras y refrigeradas para preservar cada nota del vino.",
    aosDelay: 300,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#3E1F1B] py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-[#E3B778] mb-12"
          data-aos="fade-up"
        >
          Nuestros Servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-[#470808] rounded-lg shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300"
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
