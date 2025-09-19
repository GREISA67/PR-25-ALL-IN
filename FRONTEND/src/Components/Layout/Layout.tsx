import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar.tsx";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar arriba, visible en todas las páginas */}
      <Navbar />

      {/* Contenido de cada página */}
      <main className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
