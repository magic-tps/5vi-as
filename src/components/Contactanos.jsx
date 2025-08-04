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
      className="bg-gradient-to-r from-[#5c1818] to-[#bb5a5a] py-16 text-white"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-[#E3B778] mb-10"
          data-aos="fade-up"
        >
          Contáctanos
        </h2>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="max-w-2xl mx-auto bg-[#470808] p-8 rounded-2xl shadow-xl space-y-6"
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
              name="nombre"
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
              name="correo"
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
              name="mensaje"
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
