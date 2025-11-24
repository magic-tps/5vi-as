import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const formRef = useRef();
  const [error, setError] = useState("");
  const [enviando, setEnviando] = useState(false);

  // 1) Copia exactamente estos IDs desde tu Dashboard de EmailJS
  const SERVICE_ID = "service_k3f1lzp"; // Revisa que coincida justo con tu “Email Services”
  const TEMPLATE_ID = "template_nmtiynv"; // Tu “Email Templates” → “Template ID”
  const PUBLIC_KEY = "GHz2zLXQGwWXFLApP"; // Tu “API Keys” → “Public Key” (User ID)

  // 2) Inicializa EmailJS al montar
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
    console.log("EmailJS inicializado con Public Key:", PUBLIC_KEY);
  }, [PUBLIC_KEY]);

  // 3) Función de envío
  const sendEmail = (e) => {
    e.preventDefault();
    setError("");

    // Extraemos los valores desde el form (user_name, user_email, message)
    const nombre = formRef.current.user_name.value.trim();
    const correo = formRef.current.user_email.value.trim();
    const mensaje = formRef.current.message.value.trim();

    // Validaciones mínimas
    if (!nombre || !correo || !mensaje) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(correo)) {
      setError("Ingresa un correo válido.");
      return;
    }

    setEnviando(true);

    // 4) Enviamos usando el ref al <form>
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current).then(
      (response) => {
        console.log("✅ sendForm OK:", response);
        alert("¡Mensaje enviado correctamente!");
        formRef.current.reset();
        setEnviando(false);
      },
      (err) => {
        console.error("❌ sendForm ERROR:", err.text || err);
        setError(
          "Ocurrió un error al enviar. Revisa la consola para más detalles."
        );
        setEnviando(false);
      }
    );
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-r from-[#0f2d2a] via-[#3c0c0c] to-[#0f2d2a] py-16 text-white"
    >
      <div className="snow-overlay" aria-hidden="true" />
      <div className="container mx-auto px-4 md:px-8 lg:px-20 relative">
        <div className="text-center mb-10" data-aos="fade-up">
          <p className="uppercase tracking-[0.25em] text-xs text-[#E3B778]/80 mb-3">
            Brinda con nosotros
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E3B778]">
            Contáctanos
          </h2>
          <p className="text-gray-200 mt-3 max-w-2xl mx-auto">
            Agenda catas navideñas, envíos con dedicatoria o personaliza tu pack
            para sorprender a quienes más quieres.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="max-w-2xl mx-auto bg-white/5 border border-white/10 p-8 rounded-2xl card-glow space-y-6 backdrop-blur"
          data-aos="fade-up"
        >
          {error && (
            <div className="bg-red-600 text-white text-sm p-2 rounded">
              {error}
            </div>
          )}

          {/* Nombre completo */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#E3B778]">
              Nombre completo
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Ej. Karina Rossel"
              className="w-full px-4 py-3 rounded-lg bg-[#2c0d0d] text-white border border-[#E3B778] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E3B778]"
            />
          </div>

          {/* Correo electrónico */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#E3B778]">
              Correo electrónico
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="Ej. karina@gmail.com"
              className="w-full px-4 py-3 rounded-lg bg-[#2c0d0d] text-white border border-[#E3B778] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E3B778]"
            />
          </div>

          {/* Mensaje */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#E3B778]">
              Mensaje
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="¿En qué podemos ayudarte?"
              className="w-full px-4 py-3 rounded-lg bg-[#2c0d0d] text-white border border-[#E3B778] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E3B778]"
            ></textarea>
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            disabled={enviando}
            className={`w-full ${
              enviando
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#E3B778] hover:bg-[#d6a753]"
            } text-[#3E1F1B] font-semibold py-3 rounded-full transition duration-200`}
          >
            {enviando ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
