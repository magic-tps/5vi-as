import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-gradient-to-r from-[#0f2d2a] via-[#270c0c] to-[#0f2d2a] text-white py-12 px-4 overflow-hidden">
        <div className="snow-overlay" aria-hidden="true" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-center md:text-left relative">
          {/* Logo o nombre */}
          <div>
            <h3 className="text-2xl font-bold text-[#E3B778]">5 Viñas</h3>
            <p className="text-sm text-gray-300 mt-2">
              Inspirados en la pasión por el buen vino y pisco artesanal.
            </p>
          </div>

          {/* Navegación */}
          <div className="space-y-2">
            <h4 className="text-[#E3B778] font-semibold mb-2">Enlaces</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#inicio" className="hover:text-[#E3B778] transition">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-[#E3B778] transition">
                  Catálogo
                </a>
              </li>
              <li>
                <a href="#ofertas" className="hover:text-[#E3B778] transition">
                  Ofertas
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#E3B778] transition">
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>

          {/* Horario de atención */}
          <div className="space-y-2">
            <h4 className="text-[#E3B778] font-semibold mb-2">Horario</h4>
            <p className="text-sm text-gray-300">
              Lunes a Viernes: 10:00 a.m. - 8:00 p.m.
            </p>
            <p className="text-sm text-gray-300">
              Sábados: 10:00 a.m. - 5:00 p.m.
            </p>
            <p className="text-sm text-gray-300">Domingos: Cerrado</p>
          </div>

          {/* Redes sociales */}
          <div className="space-y-2">
            <h4 className="text-[#E3B778] font-semibold mb-2">Síguenos</h4>
            <div className="flex justify-center md:justify-start gap-4 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaFacebookF className="text-[#1877F2]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaInstagram className="text-[#E1306C]" />
              </a>
              <a
                href="https://wa.me/51924786633"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaWhatsapp className="text-[#25D366]" />
              </a>
            </div>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="mt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} 5 Viñas | Desarrollado por MagiCoder.
          Derechos reservados.
        </div>

        {/* Mensaje legal */}
        <div className="mt-4 text-center text-xs text-red-300 uppercase tracking-wide font-semibold">
          Tomar bebidas alcohólicas en exceso es dañino
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/51924786633"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-50 hover:scale-110 transition-transform"
        title="Chatea con nosotros por WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </>
  );
};

export default Footer;
