
import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Report {
  id: number;
  titulo: string;
  categoria: string;
  descripcion: string;
  estado: "Aprobado" | "Pendiente" | "Rechazado";
  adjuntos: number;
  imagen: string;
  posicion: [number, number];
}

const reportsData: Report[] = [
  {
    id: 1,
    titulo: "Bache en la Av. América",
    categoria: "Baches",
    descripcion: "Se formó un bache en la Av. América entre Libertad y Bolívar.",
    estado: "Aprobado",
    adjuntos: 2,
    imagen: "data:image/jpeg;base64,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",
    posicion: [-17.3935, -66.157],
  },
  {
    id: 2,
    titulo: "Bache en la Av. Blanco Galindo",
    categoria: "Baches",
    descripcion: "Bache grande frente al mercado.",
    estado: "Pendiente",
    adjuntos: 1,
    imagen: "https://via.placeholder.com/400x200.png?text=Imagen+2",
    posicion: [-17.4005, -66.160],
  },
  {
    id: 3,
    titulo: "Bache en la Av. Ayacucho",
    categoria: "Baches",
    descripcion: "Hueco pequeño en la esquina con la Av. Heroínas.",
    estado: "Rechazado",
    adjuntos: 1,
    imagen: "https://via.placeholder.com/400x200.png?text=Imagen+3",
    posicion: [-17.395, -66.158],
  },
];

const ValidationReportsPage: React.FC = () => {
  const [filter, setFilter] = useState<"" | "Pendiente" | "Aprobado" | "Rechazado">("");
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  const filteredReports = filter
    ? reportsData.filter((r) => r.estado === filter)
    : reportsData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f2e] via-[#0d1b4c] to-[#0a2c77] text-white flex flex-col lg:flex-row justify-center items-start gap-10 p-6">
      {/* Lista de reportes */}
      <div className="w-full lg:w-1/3 space-y-6">
        <h1
          className="text-3xl font-bold mb-6 text-center"
          style={{ fontFamily: "serif" }}
        >
          Validación de Reportes
        </h1>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={() => setFilter("Pendiente")}
            className={`px-6 py-2 rounded-full ${
              filter === "Pendiente"
                ? "bg-blue-600"
                : "border border-blue-400 hover:bg-blue-700"
            }`}
          >
            Pendientes
          </button>
          <button
            onClick={() => setFilter("Aprobado")}
            className={`px-6 py-2 rounded-full ${
              filter === "Aprobado"
                ? "bg-green-600"
                : "border border-green-400 hover:bg-green-700"
            }`}
          >
            Aprobados
          </button>
          <button
            onClick={() => setFilter("Rechazado")}
            className={`px-6 py-2 rounded-full ${
              filter === "Rechazado"
                ? "bg-red-600"
                : "border border-red-400 hover:bg-red-700"
            }`}
          >
            Rechazados
          </button>
        </div>

        {filteredReports.map((report) => (
          <div
            key={report.id}
            onClick={() => setSelectedReport(report)}
            className="flex justify-between items-center p-4 bg-gray-100 text-black rounded-xl shadow-md cursor-pointer hover:scale-[1.02] transition"
          >
            <div>
              <h3 className="font-semibold">{report.titulo}</h3>
              <p className="text-sm">
                {report.categoria} • Adjuntos: {report.adjuntos} Fotos
              </p>
            </div>
            <span
              className={`px-4 py-1 rounded-full text-white font-bold ${
                report.estado === "Aprobado"
                  ? "bg-green-500"
                  : report.estado === "Pendiente"
                  ? "bg-blue-500"
                  : "bg-red-500"
              }`}
            >
              {report.estado}
            </span>
          </div>
        ))}
      </div>

    {/* Panel de detalle */}
    {selectedReport && (
      <div className="w-full max-w-md bg-[#0b143a] rounded-2xl p-6 shadow-lg space-y-4">
        <h2
          className="text-2xl font-bold mb-4 text-center"
          style={{ fontFamily: "serif" }}
        >
          Detalle Reporte #{selectedReport.id}
        </h2>

        <p>
          <span className="font-semibold">Categoría:</span>{" "}
          {selectedReport.categoria}
        </p>
        <p>
          <span className="font-semibold">Título:</span>{" "}
          {selectedReport.titulo}
        </p>
        <p>
          <span className="font-semibold">Descripción:</span>{" "}
          {selectedReport.descripcion}
        </p>

        <div>
          <label className="font-semibold">Ubicación:</label>
          <div className="rounded-lg overflow-hidden shadow-md mt-2">
            <MapContainer
              center={selectedReport.posicion}
              zoom={14}
              style={{ height: "200px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
            </MapContainer>
          </div>
        </div>

        <div>
          <label className="font-semibold">Imagen:</label>
          <img
            src={selectedReport.imagen}
            alt="Reporte"
            className="w-full h-40 object-cover rounded-md mt-2 shadow-md"
          />
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between mt-6">
          <button
            onClick={() =>
              setSelectedReport({
                ...selectedReport,
                estado: "Rechazado",
              })
            }
            className="bg-red-600 flex-1 px-4 py-2 rounded-full hover:bg-red-700"
          >
            Rechazar
          </button>
          <button
            onClick={() =>
              setSelectedReport({
                ...selectedReport,
                estado: "Aprobado",
              })
            }
            className="bg-green-600 flex-1 px-4 py-2 rounded-full hover:bg-green-700"
          >
            Aceptar
          </button>
          <button
            onClick={() => setSelectedReport(null)}
            className="bg-gray-600 flex-1 px-4 py-2 rounded-full hover:bg-gray-700"
          >
            Cerrar
          </button>
        </div>
      </div>
    )}
    </div>
  );
};

export default ValidationReportsPage;
