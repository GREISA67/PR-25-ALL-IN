import React, { useState } from "react";

const ProfilePage: React.FC = () => {
  const [name, setName] = useState("Valentina Trigo");
  const [email, setEmail] = useState("Valentina.Trigo@gmail.com");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    console.log("Guardado:", { name, email });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f2e] via-[#0d1b4c] to-[#0a2c77] flex flex-col items-center p-8 text-white">
      <h1 className="text-3xl font-bold mb-8" style={{ fontFamily: "serif" }}>
        Perfil
      </h1>

      <div className="w-full max-w-3xl bg-[#0b143a] rounded-2xl p-12 shadow-lg border border-[#1d2a5b]">
        {/* Título */}
        <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "serif" }}>
          Información Personal
        </h2>

        {/* Foto */}
        <div className="flex flex-col items-center mb-10">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocL9d8LDbkUURJNuVmJVoTMuGgNjcZIYYovpQ2eBobZf3CqZgL-Gzg=s288-c-no"
            alt="Foto perfil"
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[#1e3a8a]"
          />
          <div className="flex gap-6">
            <button className="bg-[#1e3a8a] px-6 py-2 rounded-full hover:bg-[#2a4fc1] transition font-semibold">
              Cambiar Foto
            </button>
            <button className="border border-[#1e3a8a] px-6 py-2 rounded-full hover:bg-[#2a4fc1] hover:text-white transition font-semibold">
              Quitar
            </button>
          </div>
        </div>

        {/* Campos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="font-semibold">Nombre Completo:</label>
            <input
              type="text"
              value={name}
              disabled={!isEditing}
              onChange={(e) => setName(e.target.value)}
              className={`w-full mt-2 p-3 rounded-md border border-[#1e3a8a] text-black focus:outline-none ${
                isEditing
                  ? "bg-white"
                  : "bg-gray-200 cursor-not-allowed opacity-80"
              }`}
            />
          </div>

          <div>
            <label className="font-semibold">Email:</label>
            <input
              type="email"
              value={email}
              disabled={!isEditing}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full mt-2 p-3 rounded-md border border-[#1e3a8a] text-black focus:outline-none ${
                isEditing
                  ? "bg-white"
                  : "bg-gray-200 cursor-not-allowed opacity-80"
              }`}
            />
          </div>
        </div>

        {/* Botones */}
        <div className="flex justify-end gap-6 mt-10">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-[#1e3a8a] px-10 py-3 rounded-full hover:bg-[#2a4fc1] transition font-semibold"
            >
              Editar
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="bg-[#1e3a8a] px-10 py-3 rounded-full hover:bg-[#2a4fc1] transition font-semibold"
            >
              Guardar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
