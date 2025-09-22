import React, { useState } from "react";

const ReportPage: React.FC = () => {
  const [urgency, setUrgency] = useState("bajo");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b0f2e] via-[#0d1b4c] to-[#0a2c77] p-6">
      <div className="bg-gray-100 rounded-3xl shadow-lg w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-black" style={{ fontFamily: "serif" }}>
          Crear Reporte
        </h1>


        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm mb-1">
              Título del reporte
            </label>
            <input
              type="text"
              placeholder="Ej: Bache en la Av. América"
              className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2196f3]"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Categoría del reporte</label>
            <select className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2196f3]">
              <option value="">Selecciona Tipo de Reporte</option>
              <option value="basura">Basura</option>
              <option value="baches">Baches</option>
              <option value="semaforos">Semáforos</option>
            </select>
          </div>


          <div>
            <label className="block text-gray-700 text-sm mb-1">Descripción breve</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="texto corto, 1-3 líneas"
                className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2196f3]"
              />
              <button
                type="button"
                className="p-2 rounded-md bg-[#0d3c7a] text-white"
              >
                📧
              </button>
            </div>
          </div>


          <div>
            <label className="block text-gray-700 text-sm mb-1">Nivel de urgencia</label>
            <div className="flex gap-4">
              {["bajo", "medio", "alto"].map((level) => (
                <label key={level} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="urgencia"
                    value={level}
                    checked={urgency === level}
                    onChange={() => setUrgency(level)}
                    className="accent-[#0d3c7a]"
                  />
                  <span className="text-gray-700">{level}</span>
                </label>
              ))}
            </div>
          </div>

            <div>
            <label className="block text-gray-700 text-sm mb-1">Ubicación</label>
            <div className="flex items-center gap-2">
                <input
                type="text"
                value="Selecciona en el mapa"
                readOnly
                className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-700 focus:outline-none cursor-not-allowed"
                />
                <button
                type="button"
                className="p-2 rounded-md bg-[#0d3c7a] text-white"
                >
                📍
                </button>
            </div>
            </div>



          <div>
            <label className="block text-gray-700 text-sm mb-1">Subir Imágenes</label>
            <div className="border-2 border-dashed border-gray-400 rounded-md p-6 text-center relative">
              <p className="text-gray-500">Arrastra y suelta aquí</p>
              <button
                type="button"
                className="mt-3 px-4 py-2 bg-[#0d3c7a] text-white rounded-md"
              >
                Abrir Archivo
              </button>
              <span className="absolute top-2 right-2 p-2 rounded-md bg-[#0d3c7a] text-white">⬆️</span>
            </div>
          </div>


          <button
            type="submit"
            className="w-full py-3 bg-[#0d3c7a] text-white font-bold rounded-full hover:bg-[#2196f3] transition"
          >
            Enviar Reporte
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportPage;
