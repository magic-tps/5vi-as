import React from "react";
import oferta1 from "../assets/105.jpg";
import oferta2 from "../assets/102.jpg";
import oferta3 from "../assets/106.jpg";

const ofertas = [
  {
    img: oferta1,
    titulo: "Pack Premium 3x2",
    descripcion: "Lleva 3 botellas de vino y paga solo 2. Solo esta semana.",
  },
  {
    img: oferta2,
    titulo: "Vino del Mes",
    descripcion: "Descuento del 25% en nuestro vino estrella de junio.",
  },
  {
    img: oferta3,
    titulo: "Regalo por tu primera compra",
    descripcion:
      "Recibe un sostenedor de botella grabado por compras mayores a S/150.",
  },
];

const Ofertas = () => {
  return (
    <section
      id="ofertas"
      className="bg-[#3E1F1B] py-12 px-4 md:px-8 lg:px-40 text-[#E3B778]"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Ofertas Especiales
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {ofertas.map((oferta, idx) => (
            <div
              key={idx}
              className="bg-[#470808] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={oferta.img}
                alt={oferta.titulo}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{oferta.titulo}</h3>
                <p className="text-white">{oferta.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ofertas;
