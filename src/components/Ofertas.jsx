import React from "react";
import oferta1 from "../assets/105.jpg";
import oferta2 from "../assets/102.jpg";
import oferta3 from "../assets/106.jpg";

const ofertas = [
  {
    img: oferta1,
    titulo: "Pack Premium 3x2",
    descripcion:
      "Lleva 3 botellas edición navideña y paga solo 2. Incluye tarjeta dedicatoria.",
  },
  {
    img: oferta2,
    titulo: "Vino de la Nochebuena",
    descripcion: "Descuento del 25% en nuestro blend estrella para la cena de Navidad.",
  },
  {
    img: oferta3,
    titulo: "Regalo por tu primera compra",
    descripcion:
      "Recibe un sostenedor grabado y cintas rojas por compras mayores a S/150.",
  },
];

const Ofertas = () => {
  return (
    <section
      id="ofertas"
      className="relative bg-gradient-to-r from-[#0b1a1a] via-[#200b0b] to-[#0b1a1a] py-12 px-4 md:px-8 lg:px-40 text-[#E3B778]"
    >
      <div className="garland absolute top-0 left-0 right-0" aria-hidden="true" />
      <div className="snow-overlay" aria-hidden="true" />
      <div className="twinkle" aria-hidden="true" />
      <div className="max-w-7xl mx-auto text-center relative">
        <p className="uppercase tracking-[0.2em] text-xs text-[#E3B778]/80 mb-2">
          Promos con espíritu navideño
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Ofertas Especiales</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {ofertas.map((oferta, idx) => (
            <div
              key={idx}
              className="frosted-card rounded-2xl overflow-hidden relative hover:-translate-y-2 transition"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <span className="ornament left-4 top-4" aria-hidden="true" />
              <img
                src={oferta.img}
                alt={oferta.titulo}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{oferta.titulo}</h3>
                <p className="text-white">{oferta.descripcion}</p>
                <div className="mt-4 inline-flex items-center gap-2 bg-white/10 border border-[#E3B778]/30 text-white px-3 py-2 rounded-full text-sm">
                  <span className="h-2 w-2 rounded-full bg-[#E3B778]" />
                  Vigente hasta el 24 de diciembre
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ofertas;
