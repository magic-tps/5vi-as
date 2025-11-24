import React, { useState } from "react";
import { FaGift } from "react-icons/fa";
import logo from "../assets/9.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#historia", label: "Historia" },
    { href: "#services", label: "Nuestro Servicios" },
    { href: "#catalogo", label: "Catálogo" },
    { href: "#ofertas", label: "Ofertas" },
    { href: "#contact", label: "Contáctanos" },
  ];

  return (
    <header className="relative bg-gradient-to-r from-[#0f2d2a] via-[#5c1818] to-[#0f2d2a] sticky z-[100] shadow-lg">
      <div className="holiday-border" aria-hidden="true" />
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#E3B778] rounded"
        >
          <img
            src={logo}
            alt="Logo 5 Viñas"
            className="h-10 w-auto ml-2 object-contain"
          />
          <h1 className="text-2xl font-bold text-[#E3B778]">5 Viñas</h1>
        </a>

        {/* Navegación Desktop */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex space-x-8"
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white hover:text-[#E3B778] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E3B778] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botón menú móvil */}
        <button
          className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#E3B778] rounded"
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Botón destacado */}
        <nav className="hidden md:block" aria-label="Botón destacado">
          <a
            href="#catalogo"
            className="bg-gradient-to-r from-[#e3b778] to-[#c7222a] hover:from-[#f3d6a7] hover:to-[#d83335] text-[#3E1F1B] font-semibold px-6 py-2 rounded-full transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E3B778] focus:ring-offset-2"
          >
            Ver Catálogo
          </a>
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <aside
          id="mobile-menu"
          className="md:hidden absolute top-16 left-0 right-0 bg-[#1c0b0b]/95 backdrop-blur shadow-lg py-4 px-4"
          aria-label="Menú móvil"
        >
          <nav>
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="block text-white hover:text-[#E3B778] transition-colors duration-200 py-2 px-2 focus:outline-none focus:ring-2 focus:ring-[#E3B778] rounded"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#catalogo"
                  className="block text-center bg-gradient-to-r from-[#e3b778] to-[#c7222a] text-[#3E1F1B] font-semibold px-6 py-2 rounded-full hover:from-[#f3d6a7] hover:to-[#d83335] transition shadow-md"
                  onClick={toggleMenu}
                >
                  Ver Catálogo
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      )}

      <div className="hidden md:flex items-center gap-3 bg-[#e3b778]/10 text-white px-4 py-2 border-t border-[#e3b778]/20">
        <FaGift className="text-[#e3b778]" />
        <p className="text-sm">
          Vive la <strong className="text-[#e3b778]">Edición Navideña</strong> con envíos decorados y mensajes personalizados.
        </p>
      </div>
    </header>
  );
};

export default Header;
