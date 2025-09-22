import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { ThumbsUp } from "lucide-react";

const ReportDetailPage: React.FC = () => {
  const position: [number, number] = [-17.3935, -66.157]; 

  // Estado para votos y si el usuario ya dio like
  const [votes, setVotes] = useState(2);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setVotes((prev) => prev - 1);
    } else {
      setVotes((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f2e] via-[#0d1b4c] to-[#0a2c77] text-white flex flex-col items-center p-8">
      <h1
        className="text-3xl font-bold mb-8"
        style={{ fontFamily: "serif" }}
      >
        Detalle del Reporte
      </h1>

      <div className="w-full max-w-4xl space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="flex-1 space-y-6 pl-8">
            <p>
                <span className="font-semibold">Título:</span> Bache en la Av. América
            </p>
            <p>
                <span className="font-semibold">Categoría:</span> Baches
            </p>
            <p>
                <span className="font-semibold">Estado:</span> En proceso
            </p>
          </div>

          <img
            src= "data:image/jpeg;base64,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"
            alt="Reporte"
            className="w-72 h-44 object-cover rounded-md shadow-md"
          />
        </div>

        <div className="pl-8">
          <p className="font-semibold mb-1">Descripción:</p>
          <p className="text-gray-200">
            Se formó un bache de gran tamaño en la Av. América entre las calles
            Libertad y Bolívar. Es peligroso para autos y motos, especialmente de
            noche ya que no hay señalización.
          </p>
        </div>

        <div className="pl-8">
          <p className="font-semibold mb-2">Ubicación:</p>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <MapContainer
              center={position}
              zoom={12}
              style={{ height: "400px", width: "100%" }}
              className="leaflet-container"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
            </MapContainer>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 pl-8">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-3 py-1 rounded-full transition ${
              liked
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-blue-600 hover:bg-blue-300"
            }`}
          >
            <ThumbsUp
              className={`w-5 h-5 ${
                liked ? "fill-white" : "fill-blue-600"
              }`}
            />
            <span>{liked ? "Ya votaste" : "Votar"}</span>
          </button>

          <p className="text-white ml-2">{votes} votos</p>
        </div>
      </div>
    </div>
  );
};

export default ReportDetailPage;
