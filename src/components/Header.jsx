import React, { useState } from "react";
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
    <header className="bg-gradient-to-r from-[#bb5a5a] to-[#5c1818] sticky z-[100] shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#E3B778] rounded"
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
            className="bg-[#E3B778] hover:bg-[#d6a753] text-[#3E1F1B] font-semibold px-6 py-2 rounded-full transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-[#E3B778] focus:ring-offset-2"
          >
            Ver Catálogo
          </a>
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <aside
          id="mobile-menu"
          className="md:hidden absolute top-16 left-0 right-0 bg-[#3E1F1B] shadow-lg py-4 px-4"
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
                  className="block text-center bg-[#E3B778] text-[#3E1F1B] font-semibold px-6 py-2 rounded-full hover:bg-[#d6a753] transition"
                  onClick={toggleMenu}
                >
                  Ver Catálogo
                </a>
              </li>
            </ul>
          </nav>
        </aside>
      )}
    </header>
  );
};

export default Header;
