// src/Components/Layout/NavBar.tsx
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0d3c7a] h-16 flex items-center justify-between px-8 shadow-md relative">

      <div className="absolute top-0 left-0 w-full h-[4px] bg-[#2196f3]" />


      <h1 className="text-white font-bold text-lg tracking-wide">ALL IN</h1>


      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 text-white cursor-pointer"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2V19.2c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          </div>
          <span className="text-base">Iniciar Sesión</span>
          <span className="text-sm">▼</span>
        </button>

        {open && (
          <div className="absolute right-0 mt-3 w-48 bg-white rounded-md shadow-lg py-2 z-50">
            <a
              href="#perfil"
              className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Perfil
            </a>
            <a
              href="#config"
              className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Configuración
            </a>
            <a
              href="#logout"
              className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Cerrar Sesión
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
