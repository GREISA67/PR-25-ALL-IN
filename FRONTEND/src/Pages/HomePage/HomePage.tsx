import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const HomePage: React.FC = () => {
  const position: LatLngExpression = [-17.3935, -66.1570];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f2e] via-[#0d1b4c] to-[#0a2c77] flex flex-col items-center p-6">
      <div className="w-full max-w-5xl">
        <div className="mb-4 flex justify-start">
          <select
            className="px-8 py-3 rounded-full bg-[#0d3c7a] text-white font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-[#2196f3] appearance-none pr-10 relative"
            style={{
              backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='white' height='16' viewBox='0 0 24 24' width='16' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1.5rem center", 
              backgroundSize: "1rem",
            }}
          >
            <option value="">Selecciona tipo de reporte</option>
            <option value="basura">Basura</option>
            <option value="baches">Baches</option>
            <option value="semaforos">Semaforos</option>
          </select>
        </div>

        {/* Mapa con esquinas redondeadas */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={position}
            zoom={14}
            style={{ height: "600px", width: "100%" }}
            className="leaflet-container"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
