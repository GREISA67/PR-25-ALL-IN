import React from "react";

const Register: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#0b0f2e] via-[#0d1b4c] to-[#0a2c77]">
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-xl p-10 w-96 flex flex-col items-center">
        {/* Icono */}
        <div className="w-16 h-16 rounded-full border-2 border-[#0d3c7a] flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-[#0d3c7a]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.121 17.804A9.965 9.965 0 0112 15c2.21 0 4.247.72 5.879 1.922M15 10a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>

        {/* Título */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Regístrate</h2>

        {/* Formulario */}
        <form className="w-full space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2196f3]"
          />
          <input
            type="email"
            placeholder="Correo"
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2196f3]"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2196f3]"
          />
          <input
            type="password"
            placeholder="Confirmar Contraseña"
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#2196f3]"
          />

          {/* Botón */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-[#0d3c7a] to-[#2196f3] hover:opacity-90 transition"
          >
            Registrarse
          </button>
        </form>

        {/* Enlace */}
        <p className="mt-6 text-sm text-gray-600">
          ¿Ya tienes cuenta?{" "}
          <a href="/login" className="font-semibold text-[#0d3c7a] hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
