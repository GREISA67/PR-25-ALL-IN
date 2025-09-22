import React from "react";
import { Users, CheckCircle, Clock } from "lucide-react";

const DashboardPage: React.FC = () => {
  const reportStats = { enProceso: 20, resueltos: 50 };
  const usersCount = 5348;
  const votes = [
    { titulo: "Bache en Av. América", votos: 45 },
    { titulo: "Basura en Plaza Colón", votos: 32 },
  ];

  // Datos de categorías
  const categories = [
    { name: "Árboles caídos", value: 30, color: "#4CAF50" },
    { name: "Semáforos", value: 15, color: "#2196F3" },
    { name: "Basura", value: 25, color: "#F44336" },
    { name: "Baches", value: 20, color: "#FF9800" },
  ];

  // Calcular total y porcentaje
  const total = categories.reduce((sum, c) => sum + c.value, 0);
  let cumulative = 0;

  const paths = categories.map((cat, i) => {
    const startAngle = (cumulative / total) * 2 * Math.PI;
    cumulative += cat.value;
    const endAngle = (cumulative / total) * 2 * Math.PI;

    const x1 = 100 + 100 * Math.cos(startAngle);
    const y1 = 100 + 100 * Math.sin(startAngle);
    const x2 = 100 + 100 * Math.cos(endAngle);
    const y2 = 100 + 100 * Math.sin(endAngle);

    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

    return (
      <path
        key={i}
        d={`M100,100 L${x1},${y1} A100,100 0 ${largeArc},1 ${x2},${y2} Z`}
        fill={cat.color}
      />
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f2e] via-[#0d1b4c] to-[#0a2c77] p-8 text-white">
      <h1
        className="text-4xl font-bold text-center mb-10"
        style={{ fontFamily: "serif" }}
      >
        📊 Dashboard
      </h1>

      {/* Tarjetas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-[#0b143a] p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <Clock className="w-10 h-10 text-yellow-400 mb-3" />
          <h2 className="text-xl font-semibold mb-2">En proceso</h2>
          <p className="text-4xl font-bold">{reportStats.enProceso}</p>
        </div>

        <div className="bg-[#0b143a] p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <CheckCircle className="w-10 h-10 text-green-400 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Resueltos</h2>
          <p className="text-4xl font-bold">{reportStats.resueltos}</p>
        </div>

        <div className="bg-[#0b143a] p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <Users className="w-10 h-10 text-cyan-400 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Usuarios Registrados</h2>
          <p className="text-4xl font-bold">{usersCount.toLocaleString()}</p>
        </div>
      </div>

      {/* Gráficos y votos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {/* Gráfico categorías con SVG */}
        <div className="bg-[#0b143a] p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-6">Reportes por categoría</h2>
          <svg width="200" height="200" viewBox="0 0 200 200">
            {paths}
          </svg>
          <ul className="mt-4 space-y-1">
            {categories.map((c, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <span
                  className="inline-block w-4 h-4 rounded"
                  style={{ backgroundColor: c.color }}
                ></span>
                {c.name} ({c.value})
              </li>
            ))}
          </ul>
        </div>

        {/* Conteo de votos */}
        <div className="bg-[#0b143a] p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Conteo de Votos
          </h2>
          <ul className="space-y-4">
            {votes.map((v, i) => (
              <li
                key={i}
                className="flex justify-between items-center bg-gray-100 text-black px-4 py-3 rounded-lg shadow-md"
              >
                <span className="font-semibold">{v.titulo}</span>
                <span className="text-blue-600 font-bold">{v.votos} votos</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
